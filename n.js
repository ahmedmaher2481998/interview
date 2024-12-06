import { execSync } from "child_process";
import { Client } from "undici";
// Function to get the Windows host IP address in WSL
const getWindowsHostIP = () => {
  try {
    const ip = execSync("ip route show default | awk '{print $3}'")
      .toString()
      .trim();
    return ip;
  } catch (error) {
    console.error("Error getting Windows host IP:", error);
    return "127.0.0.1"; // Fallback to localhost if there's an error
  }
};

const windowsHostIP = getWindowsHostIP();
const apiUrl = `http://${windowsHostIP}:11434/api/chat`;

const inputFile = "./senior-react-interview.md";
const outputFile = "/react-interview-with-answers.md";
const model = "llama3.2";

let messages = []; // To store conversation context
const client = new Client(`http://${windowsHostIP}`, {
  connect: {
    timeout: 0, // 0 means no timeout, you can set this to a very high value if needed
  },
});
const fetchWithTimeout = async (url, body) => {
  console.log("req", body);
  try {
    const res = await client.request({
      path: "/api/chat",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    console.log("🚀 ~ fetchWithTimeout ~ body:", res);
    // const chunks = [];
    // for await (const chunk of body) {
    //   chunks.push(chunk);
    // }
    // const responseBody = Buffer.concat(chunks).toString();
    const finalResponse = await JSON.parse(res);
    console.log("🚀 ~ fetchWithTimeout ~ finalResponse:", finalResponse);
    return finalResponse;
  } catch (error) {
    throw error;
  }
};
const testRequest = await fetchWithTimeout(
  apiUrl,
  JSON.stringify({
    model: model,
    messages: [
      {
        role: "user",
        content: "Hello,confirm you got this right",
      },
    ],
    stream: false,
  })
);
console.log("🚀 ~ fetchWithTimeout ~ response:", testRequest);
const rl = readline.createInterface({
  input: fs.createReadStream(inputFile),
  output: process.stdout,
  terminal: false,
});

rl.on("line", async (line) => {
  if (line.trim()) {
    const userMessage = {
      role: "user",
      content: line,
    };

    messages.push(userMessage);
    // console.log("🚀 ~ rl.on ~ userMessage:", userMessage)
    try {
      const response = await fetchWithTimeout(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: model,
          messages: messages,
          stream: false,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const assistantMessage = {
        role: "assistant",
        content: response.data.message.content,
      };

      messages.push(assistantMessage);
      const questionWithAnswer = `**Question:** ${userMessage.content}\n\n**Answer:** ${assistantMessage.content}\n\n`;
      fs.appendFileSync(outputFile, questionWithAnswer);
      console.log("🚀 ~ rl.on ~ questionWithAnswer:", questionWithAnswer);
    } catch (error) {
      console.error("Error sending request to LLM:", error);
      process.abort("Error sending request to LLM");
    }
  }
});

rl.on("close", () => {
  console.log("Finished processing all lines.");
});

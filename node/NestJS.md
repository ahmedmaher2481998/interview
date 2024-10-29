# NestJS Interview Questions and Answers - Part 1

## Fundamentals

### 1. What is NestJS and how does it differ from Express.js?
NestJS is a progressive Node.js framework built on top of Express.js that provides a robust architectural foundation for building scalable server-side applications. Key differences from Express.js:

- Built with TypeScript first
- Provides dependency injection out of the box
- Has a modular architecture
- Includes built-in support for OpenAPI (Swagger)
- Offers decorators for clean code organization
- Provides built-in testing utilities

While Express is minimal and unopinionated, NestJS provides a full-featured framework with established patterns and practices.

### 2. Explain the main decorators used in NestJS
The main decorators in NestJS are:

```typescript
// Module decorator - defines a module
@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {}

// Controller decorator - defines a controller
@Controller('users')
export class UserController {
  // Route decorator - defines an endpoint
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}

// Injectable decorator - marks a class as a provider
@Injectable()
export class UserService {
  // Service implementation
}
```

### 3. What is the purpose of the main.ts file in a NestJS application?
The main.ts file is the entry point of a NestJS application. It creates and configures the application instance:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global pipes
  app.useGlobalPipes(new ValidationPipe());
  
  // Global prefix
  app.setGlobalPrefix('api');
  
  await app.listen(3000);
}
bootstrap();
```

### 4. How does dependency injection work in NestJS?
Dependency injection in NestJS is handled through the constructor. The framework automatically resolves and injects dependencies:

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private configService: ConfigService,
  ) {}
}

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
}
```

### 5. Explain the NestJS module system and its importance
Modules are used to organize application components and establish clear boundaries. Each module encapsulates related functionality:

```typescript
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ConfigModule.forRoot(),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
```

## Controllers & Routing

### 6. What is the role of Controllers in NestJS?
Controllers handle incoming requests and return responses. They define routes and request handling logic:

```typescript
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
```

### 7. How do you handle different HTTP methods in NestJS controllers?
HTTP methods are handled using decorators:

```typescript
@Controller('users')
export class UserController {
  @Get()
  findAll() {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {}

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {}

  @Delete(':id')
  remove(@Param('id') id: string) {}
}
```

### 8. Explain route parameters and how to use them
Route parameters are defined using decorators and can be extracted from the request:

```typescript
@Controller('users')
export class UserController {
  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('include') include?: string,
  ) {
    return this.userService.findOne(id, include);
  }

  @Get(':userId/posts/:postId')
  findUserPost(
    @Param('userId') userId: string,
    @Param('postId') postId: string,
  ) {
    return this.userService.findUserPost(userId, postId);
  }
}
```

### 9. What are DTO (Data Transfer Objects) and why are they important?
DTOs define the shape of data being transferred between client and server. They help with validation and type safety:

```typescript
// Create DTO
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(6)
  readonly password: string;
}

// Update DTO
export class UpdateUserDto extends PartialType(CreateUserDto) {}
```

### 10. How do you implement validation in NestJS controllers?
Validation is implemented using class-validator decorators and ValidationPipe:

```typescript
// Global validation pipe in main.ts
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,
  transform: true,
}));

// DTO with validation
export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  readonly password: string;
}

// Controller using validated DTO
@Post()
async create(@Body() createUserDto: CreateUserDto) {
  return this.userService.create(createUserDto);
}
```

### 11. What are Providers in NestJS?
Providers are classes annotated with @Injectable() that can be injected as dependencies:

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
```

### 12. Explain custom providers and their use cases
Custom providers allow you to customize how services are instantiated:

```typescript
// Custom provider using useFactory
@Module({
  providers: [
    {
      provide: 'CONFIG_OPTIONS',
      useFactory: async (configService: ConfigService) => {
        return {
          apiKey: configService.get('API_KEY'),
          timeout: 5000,
        };
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
```

### 13. How do you implement singleton services in NestJS?
Services are singleton by default when using the @Injectable() decorator:

```typescript
@Injectable()
export class CacheService {
  private cache = new Map<string, any>();

  set(key: string, value: any): void {
    this.cache.set(key, value);
  }

  get(key: string): any {
    return this.cache.get(key);
  }
}
```

### 14. What is the difference between useClass, useValue, and useFactory?

```typescript
@Module({
  providers: [
    // useClass - instantiate a class
    {
      provide: UserService,
      useClass: UserService,
    },
    // useValue - provide a constant value
    {
      provide: 'API_KEY',
      useValue: 'my-api-key',
    },
    // useFactory - dynamic provider creation
    {
      provide: 'DATABASE_CONFIG',
      useFactory: (configService: ConfigService) => ({
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
      }),
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
```

### 15. How do you handle circular dependencies in NestJS?
Circular dependencies can be resolved using forwardRef():

```typescript
@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => PostService))
    private postService: PostService,
  ) {}
}

@Injectable()
export class PostService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}
}
```

### 16. What is middleware in NestJS and how is it implemented?

```typescript
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request to ${req.path}`);
    next();
  }
}

// Applying middleware in a module
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users');
  }
}
```

### 17. Explain the difference between middleware and interceptors
While both can modify requests/responses, interceptors have more capabilities:

```typescript
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => {
          console.log(`${method} ${url} took ${Date.now() - now}ms`);
        }),
      );
  }
}
```

### 18. What are Guards and how do they work?
Guards determine whether a request should be handled by the route handler:

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = this.jwtService.verify(token);
      request.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
```

### 19. How do you implement authentication using Guards?

```typescript
// Auth guard implementation
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    
    if (!token) {
      throw new UnauthorizedException();
    }
    
    try {
      request.user = await this.jwtService.verifyAsync(token);
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}

// Using the guard in a controller
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
```

### 20. Explain the execution order of middleware, guards, and interceptors
The execution order is:

1. Middleware
2. Guards
3. Interceptors (pre-controller)
4. Pipes
5. Controller
6. Interceptors (post-controller)
7. Exception filters (if an error occurs)

Example showing the complete request lifecycle:

```typescript
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('3. Interceptor - Before');
    return next
      .handle()
      .pipe(
        tap(() => console.log('6. Interceptor - After')),
      );
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    console.log('2. Guard');
    return true;
  }
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('1. Middleware');
    next();
  }
}

@Controller('example')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
export class ExampleController {
  @Get()
  example() {
    console.log('4. Controller');
    return 'Example';
  }
}
```

# NestJS Interview Questions and Answers - Part 2

## Exception Handling

### 21. How does exception handling work in NestJS?
NestJS provides built-in exception handling through the HttpException class and ExceptionFilters:

```typescript
@Get(':id')
findOne(@Param('id') id: string) {
  const user = this.userService.findOne(id);
  if (!user) {
    throw new NotFoundException(`User with ID ${id} not found`);
  }
  return user;
}
```

### 22. What is the ExceptionFilter and how do you create custom ones?
Exception filters handle exceptions at the application level:

```typescript
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: exception.message,
    });
  }
}
```

### 23. How do you handle validation errors globally?
Create a validation filter to handle class-validator errors:

```typescript
@Catch(ValidationError)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    
    response.status(400).json({
      statusCode: 400,
      message: 'Validation failed',
      errors: this.formatErrors(exception),
    });
  }
}
```

### 24. Explain the built-in exception layers in NestJS
NestJS provides several built-in HTTP exceptions:

```typescript
// Examples of built-in exceptions
throw new BadRequestException('Invalid parameters');
throw new UnauthorizedException('Please authenticate');
throw new ForbiddenException('Insufficient permissions');
throw new NotFoundException('Resource not found');
```

### 25. How do you implement custom error responses?
Create a custom exception class:

```typescript
export class CustomException extends HttpException {
  constructor(error: string) {
    super({
      status: HttpStatus.BAD_REQUEST,
      error: error,
      timestamp: new Date().toISOString(),
    }, HttpStatus.BAD_REQUEST);
  }
}
```

## Database Integration

### 26. How do you integrate TypeORM with NestJS?
Configure TypeORM in your app module:

```typescript
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [User],
      synchronize: false,
    }),
  ],
})
export class AppModule {}
```

### 27. Explain repository pattern implementation in NestJS
Use TypeORM's repository pattern:

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
}
```

### 28. How do you handle database migrations?
Create and run migrations using TypeORM CLI:

```typescript
// migration-timestamp.ts
export class CreateUserTable1234567890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
        ],
      }),
    );
  }
}
```

### 29. What are the best practices for database transactions?
Use QueryRunner for transactions:

```typescript
@Injectable()
export class UserService {
  async transferPoints(fromId: string, toId: string, points: number) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    
    try {
      await queryRunner.manager.decrement(User, { id: fromId }, 'points', points);
      await queryRunner.manager.increment(User, { id: toId }, 'points', points);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
```

### 30. How do you implement database seeding?
Create a seeder service:

```typescript
@Injectable()
export class Seeder {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async seed() {
    const users = [
      { name: 'John', email: 'john@example.com' },
      { name: 'Jane', email: 'jane@example.com' },
    ];
    
    await this.userRepository.save(users);
  }
}
```

## Testing

### 31. What testing utilities does NestJS provide?
NestJS provides TestingModule for unit and e2e testing:

```typescript
describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
```

### 32. How do you write unit tests for NestJS services?
Test service methods using Jest:

```typescript
describe('UserService', () => {
  let service: UserService;
  let repository: MockType<Repository<User>>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get(UserService);
    repository = module.get(getRepositoryToken(User));
  });

  it('should find a user', async () => {
    const user = { id: '1', name: 'Test' };
    repository.findOne.mockReturnValue(user);
    expect(await service.findOne('1')).toEqual(user);
  });
});
```

### 33. Explain e2e testing in NestJS
Create e2e tests using supertest:

```typescript
describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});
```

### 34. How do you mock dependencies in NestJS tests?
Use Jest's mocking capabilities:

```typescript
const mockUserService = {
  findOne: jest.fn(),
  create: jest.fn(),
};

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });
});
```

### 35. What is Test Database Seeding and how to implement it?
Create a test seeder:

```typescript
export class TestSeeder {
  constructor(private connection: Connection) {}

  async seed() {
    await this.connection.synchronize(true); // Clear DB
    await this.connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        { name: 'Test User', email: 'test@example.com' },
      ])
      .execute();
  }
}
```

## Performance & Optimization

### 36. How do you implement caching in NestJS?
Use the built-in cache manager:

```typescript
@Injectable()
export class UserService {
  constructor(private cacheManager: Cache) {}

  async getUser(id: string) {
    const cached = await this.cacheManager.get(`user:${id}`);
    if (cached) return cached;

    const user = await this.userRepository.findOne(id);
    await this.cacheManager.set(`user:${id}`, user, { ttl: 300 });
    return user;
  }
}
```

### 37. Explain the concept of lazy loading modules
Implement lazy loading using dynamic imports:

```typescript
@Module({
  imports: [
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
        children: [
          {
            path: 'users',
            module: UserModule,
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}
```

### 38. How do you handle file uploads efficiently?
Use streaming for file uploads:

```typescript
@Post('upload')
@UseInterceptors(FileInterceptor('file'))
async uploadFile(@UploadedFile() file: Express.Multer.File) {
  const writeStream = createWriteStream(`./uploads/${file.originalname}`);
  writeStream.write(file.buffer);
  return { filename: file.originalname };
}
```

### 39. What strategies do you use for API rate limiting?
Implement rate limiting using ThrottlerModule:

```typescript
@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
})
export class AppModule {}

@Controller('users')
@UseGuards(ThrottlerGuard)
export class UserController {}
```

### 40. How do you optimize database queries in NestJS?
Use QueryBuilder and proper indexes:

```typescript
@Injectable()
export class UserService {
  async getActiveUsers() {
    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.profile', 'profile')
      .where('user.isActive = :active', { active: true })
      .select(['user.id', 'user.email', 'profile.name'])
      .cache(true)
      .getMany();
  }
}
```


# NestJS Interview Questions and Answers - Part 3

## Security

### 41. How do you implement JWT authentication?
Basic JWT implementation:

```typescript
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

// JWT middleware
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private jwtService: JwtService) {
    super();
  }
}
```

### 42. Explain role-based access control (RBAC) implementation
Implement RBAC using custom decorators and guards:

```typescript
// Role decorator
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// Role guard
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    return roles.some((role) => user.roles?.includes(role));
  }
}

// Usage in controller
@Controller('admin')
@Roles('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {}
```

### 43. How do you handle CORS in NestJS?
Configure CORS in main.ts:

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });
  
  await app.listen(3000);
}
```

### 44. What security headers should be implemented?
Implement security headers using Helmet:

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
        scriptSrc: ["'self'"]
      },
    },
    referrerPolicy: { policy: 'no-referrer' },
  }));
}
```

### 45. How do you prevent common security vulnerabilities?
Implement rate limiting and sanitization:

```typescript
@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any) {
    return sanitize(value); // Sanitize input
  }
}

// Rate limiting implementation
@Controller('auth')
@UseGuards(ThrottlerGuard)
@Throttle(5, 60) // 5 requests per minute
export class AuthController {}
```

## WebSockets & Real-time

### 46. How do you implement WebSockets in NestJS?
Basic WebSocket gateway:

```typescript
@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): void {
    this.server.emit('message', payload);
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }
}
```

### 47. Explain Gateway decorators and their usage
Common gateway decorators:

```typescript
@WebSocketGateway({
  namespace: '/chat',
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, room: string) {
    client.join(room);
    return { event: 'joined', room };
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(client: Socket, room: string) {
    client.leave(room);
  }
}
```

### 48. How do you handle WebSocket authentication?
Implement WebSocket authentication:

```typescript
@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection {
  constructor(private authService: AuthService) {}

  async handleConnection(client: Socket) {
    const token = client.handshake.headers.authorization;
    try {
      const user = await this.authService.validateToken(token);
      client.data.user = user;
    } catch {
      client.disconnect();
    }
  }
}
```

### 49. What is Socket.IO and how does it integrate with NestJS?
Socket.IO integration example:

```typescript
@WebSocketGateway({
  cors: true,
  namespace: '/events',
  transports: ['websocket'],
})
export class EventsGateway {
  @WebSocketServer() 
  server: Server;

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): WsResponse<string> {
    const event = 'events';
    return { event, data };
  }
}
```

### 50. How do you implement room-based communication?
Room management in WebSockets:

```typescript
@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, room: string) {
    client.join(room);
    client.to(room).emit('userJoined', client.id);
  }

  @SubscribeMessage('chatToRoom')
  handleChatToRoom(client: Socket, payload: { room: string; message: string }) {
    client.to(payload.room).emit('message', {
      user: client.id,
      message: payload.message,
    });
  }
}
```

## Configuration & Environment

### 51. How do you handle configuration management?
Using ConfigModule:

```typescript
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
  ],
})
export class AppModule {}
```

### 52. Explain environment variables usage in NestJS
Access environment variables:

```typescript
@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getDatabaseUrl() {
    return this.configService.get<string>('DATABASE_URL');
  }

  getJwtConfig() {
    return {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: this.configService.get('JWT_EXPIRES_IN', '1d'),
    };
  }
}
```

### 53. What is ConfigService and how is it used?
Using ConfigService with validation:

```typescript
@Injectable()
export class DatabaseConfig {
  constructor(private configService: ConfigService) {}

  get config(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      username: this.configService.get('DB_USER'),
      password: this.configService.get('DB_PASS'),
      database: this.configService.get('DB_NAME'),
    };
  }
}
```

### 54. How do you implement different configs for different environments?
Environment-specific configuration:

```typescript
// config/configuration.ts
export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
});

// Usage in module
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
  ],
})
```

### 55. What are namespace configurations?
Implementing namespaced configuration:

```typescript
// database.config.ts
registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
}));

// Usage
@Injectable()
export class DatabaseService {
  constructor(
    @Inject('database') private dbConfig: ConfigType<typeof databaseConfig>,
  ) {}

  connect() {
    return createConnection({
      host: this.dbConfig.host,
      port: this.dbConfig.port,
    });
  }
}
```

## Microservices

### 56. How does NestJS support microservices architecture?
Basic microservice setup:

```typescript
// main.ts
const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  AppModule,
  {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3001,
    },
  },
);

// Controller
@Controller()
export class UserController {
  @MessagePattern({ cmd: 'get_user' })
  getUser(data: { id: string }) {
    return this.userService.findOne(data.id);
  }
}
```

### 57. Explain different transport methods in NestJS microservices
Transport layer implementations:

```typescript
// TCP Transport
const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  AppModule,
  {
    transport: Transport.TCP,
    options: { port: 3001 },
  },
);

// Redis Transport
const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  AppModule,
  {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  },
);
```

### 58. How do you implement service discovery?
Basic service discovery setup:

```typescript
// Using Consul for service discovery
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'USER_SERVICE',
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('USER_SERVICE_HOST'),
            port: configService.get('USER_SERVICE_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
})
```

### 59. Explain the message patterns in microservices
Different message patterns:

```typescript
// Event-based pattern
@EventPattern('user_created')
handleUserCreated(data: Record<string, unknown>) {
  return this.userService.handleUserCreated(data);
}

// Message-based pattern
@MessagePattern({ cmd: 'get_user' })
getUser(id: string) {
  return this.userService.findOne(id);
}

// Client usage
@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private client: ClientProxy,
  ) {}

  async getUser(id: string) {
    return this.client.send({ cmd: 'get_user' }, id).toPromise();
  }
}
```

### 60. How do you handle distributed transactions?
Saga pattern implementation:

```typescript
@Injectable()
export class OrderSaga {
  @Saga()
  orderCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(OrderCreatedEvent),
      map((event) => {
        return new ValidatePaymentCommand(event.orderId);
      }),
    );
  }
}
```



I'll help you answer questions 60-80 from the list, focusing on essential code examples and key concepts.

### Advanced Concepts

**60. Custom Decorators**
```typescript
// Simple method decorator
export const LogExecutionTime = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const start = Date.now();
      const result = await original.apply(this, args);
      console.log(`${propertyKey} took ${Date.now() - start}ms`);
      return result;
    };
    return descriptor;
  };
};

// Usage
@Controller()
class UserController {
  @LogExecutionTime()
  getUsers() { }
}
```

**61. Metadata Reflection**
```typescript
// Custom role decorator
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// Guard using metadata
@Injectable()
export class RolesGuard {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();
    return matchRoles(roles, request.user.roles);
  }
}
```

**62. Custom Param Decorators**
```typescript
export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user?.[data] : user;
  },
);

// Usage
@Get()
findOne(@User('id') userId: number) {}
```

**63. Dynamic Modules**
```typescript
@Module({})
export class ConfigModule {
  static register(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
```

**64. Feature Flags**
```typescript
@Injectable()
export class FeatureService {
  private features = new Map<string, boolean>();

  isEnabled(feature: string): boolean {
    return this.features.get(feature) || false;
  }
}

// Usage
if (this.featureService.isEnabled('newFeature')) {
  // New feature code
}
```

### Error Handling & Logging

**65. Centralized Logging**
```typescript
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    
    Logger.error({
      exception: exception.message,
      stack: exception.stack,
      timestamp: new Date().toISOString(),
    });
    
    response.status(500).json({
      message: 'Internal server error'
    });
  }
}
```

**66. Logging Levels**
```typescript
@Injectable()
export class LoggerService {
  error(message: string, trace?: string) {
    Logger.error(message, trace);
  }
  
  warn(message: string) {
    Logger.warn(message);
  }
  
  debug(message: string) {
    Logger.debug(message);
  }
}
```

**67. Unhandled Exceptions**
```typescript
// main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  process.on('unhandledRejection', (reason, promise) => {
    Logger.error('Unhandled Rejection:', reason);
  });
  
  await app.listen(3000);
}
```

**68-69. Logging Libraries & Error Tracking**
```typescript
// Using Winston
import * as winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

### Deployment & DevOps

**70. Best Practices for Deployment**
```typescript
// Configuration using environment variables
@Injectable()
export class ConfigService {
  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }
  
  get nodeEnv(): string {
    return process.env.NODE_ENV || 'development';
  }
}
```

**71-74. CI/CD, Containerization, Process Management**
```dockerfile
# Dockerfile example
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
```

### API Documentation

**75-76. Swagger Documentation**
```typescript
@ApiTags('users')
@Controller('users')
export class UserController {
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserDto> {}
}
```

**77. Complex Request/Response Schemas**
```typescript
@ApiProperty({
  description: 'User object',
  example: {
    id: 1,
    name: 'John Doe',
    roles: ['admin']
  }
})
export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [String] })
  roles: string[];
}
```

**78-80. API Versioning & Documentation**
```typescript
// Version your APIs
@Controller({
  version: '1',
  path: 'users'
})
export class UserControllerV1 {}

@Controller({
  version: '2',
  path: 'users'
})
export class UserControllerV2 {}

// Main.ts versioning setup
const app = await NestFactory.create(AppModule);
app.enableVersioning({
  type: VersioningType.URI,
});
```



I'll provide concise answers with essential code examples for each category.

### Performance Monitoring

**1. Implementing Application Metrics**
```typescript
import { PrometheusController } from './prometheus.controller';

@Injectable()
export class MetricsService {
  private counter = new Counter({
    name: 'http_requests_total',
    help: 'Total HTTP requests'
  });

  recordRequest() {
    this.counter.inc();
  }
}
```

**2. Tools for Performance Monitoring**
Key tools:
- New Relic/Prometheus for metrics
- Grafana for visualization
- PM2 for process monitoring
- Node.js built-in profiler

**3. Handling Memory Leaks**
```typescript
// Memory leak detection
import * as heapdump from 'heapdump';

if (process.env.NODE_ENV === 'development') {
  setInterval(() => {
    heapdump.writeSnapshot(`./heapdump-${Date.now()}.heapsnapshot`);
  }, 60000);
}
```

**4. Request Tracking**
```typescript
@Injectable()
export class RequestTracingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const requestId = uuid();
    const request = context.switchToHttp().getRequest();
    request.requestId = requestId;
    
    return next.handle();
  }
}
```

**5. Profiling Applications**
```typescript
// Using built-in Node.js profiler
node --prof app.js
// Analysis
node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt
```

### Code Organization & Best Practices

**1. Recommended Project Structure**
```
src/
  ├── modules/
  │   ├── users/
  │   │   ├── dto/
  │   │   ├── entities/
  │   │   ├── users.service.ts
  │   │   └── users.controller.ts
  │   └── auth/
  ├── common/
  ├── config/
  └── main.ts
```

**2. Business Logic Separation**
```typescript
// Service layer example
@Injectable()
export class UserService {
  private readonly businessLogic: UserBusinessLogic;
  
  async createUser(dto: CreateUserDto): Promise<User> {
    return this.businessLogic.process(dto);
  }
}
```

**3. Repository Pattern**
```typescript
@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User> {
    return this.repo.findOne({ where: { email } });
  }
}
```

**4. Naming Conventions**
- Files: kebab-case (user.service.ts)
- Classes: PascalCase (UserService)
- Methods: camelCase (findByEmail)
- Interfaces: PascalCase with I prefix (IUserService)

**5. Code Reusability**
```typescript
// Shared decorator example
export function Validate(validationPipe: ValidationPipe) {
  return applyDecorators(
    UsePipes(validationPipe),
    ApiResponse({ status: 400, description: 'Validation failed' })
  );
}
```

### Advanced TypeScript Features

**1. TypeScript Decorators**
```typescript
function Log() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${propertyKey}`);
      return original.apply(this, args);
    };
  };
}
```

**2. Generic Types in Services**
```typescript
export class BaseService<T extends BaseEntity> {
  constructor(private readonly repository: Repository<T>) {}
  
  async findOne(id: number): Promise<T> {
    return this.repository.findOne(id);
  }
}
```

**3. Type Safety in DTOs**
```typescript
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  readonly email: string;
}
```

**4. Mapped Types**
```typescript
export class UpdateUserDto extends PartialType(CreateUserDto) {}

type ReadOnlyUser = Readonly<User>;
```

**5. Type Inheritance**
```typescript
interface BaseEntity {
  id: number;
  createdAt: Date;
}

interface User extends BaseEntity {
  email: string;
  password: string;
}
```

### Optimization & Scalability

**1. Horizontal Scaling**
```typescript
// Using PM2 cluster mode
module.exports = {
  apps: [{
    name: 'app',
    script: 'dist/main.js',
    instances: 'max',
    exec_mode: 'cluster'
  }]
}
```

**2. Database Connection Pooling**
```typescript
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  poolSize: 10,
  connectionTimeout: 20000
})
```

**3. Long-Running Tasks**
```typescript
@Injectable()
export class TaskQueue {
  @Queue('high-priority')
  async processTask(data: any) {
    // Process long-running task
  }
}
```

**4. Caching Strategies**
```typescript
@Injectable()
export class UserService {
  @Cacheable('users')
  async findAll() {
    return this.userRepository.find();
  }
}
```

**5. Optimizing Startup Time**
```typescript
// Lazy loading modules
@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User])
  ]
})
```

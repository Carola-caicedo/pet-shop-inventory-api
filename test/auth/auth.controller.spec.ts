import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../../src/auth/auth.controller';
import { AuthService } from '../../src/auth/auth.service';
import { LoginDto } from '../../src/auth/dto/login.dto';
import { RegisterDto } from '../../src/auth/dto/register.dto';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';

describe('AuthController', () => {
    let controller: AuthController;
    let authService: AuthService;

    const mockAuthService = {
        login: jest.fn(),
        register: jest.fn(),
        validateUser: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [
                {
                    provide: AuthService,
                    useValue: mockAuthService,
                },
            ],
        }).compile();

        controller = module.get<AuthController>(AuthController);
        authService = module.get<AuthService>(AuthService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('login', () => {
        it('should return user and token on successful login', async () => {
            const loginDto: LoginDto = {
                email: 'test@example.com',
                password: 'password123',
            };

            const mockUser = {
                id: 1,
                email: 'test@example.com',
                nombre: 'Test User',
                rol: 'admin'
            };

            const expectedResult = {
                access_token: 'jwt-token-123',
                user: mockUser
            };

            mockAuthService.validateUser.mockResolvedValue(mockUser);
            mockAuthService.login.mockResolvedValue(expectedResult);

            const result = await controller.login(loginDto);

            expect(result).toEqual(expectedResult);
            expect(authService.validateUser).toHaveBeenCalledWith(loginDto.email, loginDto.password);
            expect(authService.login).toHaveBeenCalledWith(mockUser);
        });

        it('should throw UnauthorizedException for invalid credentials', async () => {
            const loginDto: LoginDto = {
                email: 'test@example.com',
                password: 'wrong-password',
            };

            mockAuthService.validateUser.mockResolvedValue(null);

            await expect(controller.login(loginDto)).rejects.toThrow(UnauthorizedException);
        });
    });

    describe('register', () => {
        it('should create new user successfully', async () => {
            const registerDto: RegisterDto = {
                nombre: 'New User',
                email: 'new@example.com',
                password: 'password123',
            };

            const expectedResult = {
                id: 2,
                nombre: 'New User',
                email: 'new@example.com',
                rol: 'cliente',
            };

            mockAuthService.register.mockResolvedValue(expectedResult);

            const result = await controller.register(registerDto);

            expect(result).toEqual(expectedResult);
            expect(authService.register).toHaveBeenCalledWith(registerDto);
        });

        it('should throw BadRequestException for duplicate email', async () => {
            const registerDto: RegisterDto = {
                nombre: 'Existing User',
                email: 'existing@example.com',
                password: 'password123',
            };

            mockAuthService.register.mockRejectedValue(new BadRequestException('Email already exists'));

            await expect(controller.register(registerDto)).rejects.toThrow(BadRequestException);
        });
    });
});
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../src/users/users.controller';
import { UsersService } from '../../src/users/users.service';
import { CreateUserDto } from '../../src/users/dto/create-user.dto';
import { UpdateUserDto } from '../../src/users/dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

describe('UsersController', () => {
    let controller: UsersController;
    let usersService: UsersService;

    const mockUsersService = {
        findAll: jest.fn(),
        findOne: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: mockUsersService,
                },
            ],
        }).compile();

        controller = module.get<UsersController>(UsersController);
        usersService = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const expectedUsers = [
                { id: 1, nombre: 'User 1', email: 'user1@example.com', rol: 'admin' },
                { id: 2, nombre: 'User 2', email: 'user2@example.com', rol: 'empleado' },
            ];

            mockUsersService.findAll.mockResolvedValue(expectedUsers);

            const result = await controller.findAll();

            expect(result).toEqual(expectedUsers);
        });
    });

    describe('findOne', () => {
        it('should return a single user', async () => {
            const expectedUser = {
                id: 1,
                nombre: 'Test User',
                email: 'test@example.com',
                rol: 'admin'
            };

            mockUsersService.findOne.mockResolvedValue(expectedUser);

            const result = await controller.findOne('1');

            expect(result).toEqual(expectedUser);
        });
    });
});
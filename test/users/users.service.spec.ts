import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../src/users/users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

describe('UsersService', () => {
    let usersService: UsersService;
    let userRepository: Repository<User>;

    const mockUserRepository = {
        find: jest.fn(),
        findOne: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: getRepositoryToken(User),
                    useValue: mockUserRepository,
                },
            ],
        }).compile();

        usersService = module.get<UsersService>(UsersService);
        userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    });

    it('should be defined', () => {
        expect(usersService).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const expectedUsers = [
                { id: 1, nombre: 'User 1', email: 'user1@example.com', rol: 'admin' },
                { id: 2, nombre: 'User 2', email: 'user2@example.com', rol: 'empleado' },
            ];

            mockUserRepository.find.mockResolvedValue(expectedUsers);

            const result = await usersService.findAll();

            expect(result).toEqual(expectedUsers);
        });
    });

    describe('findOne', () => {
        it('should return a user by id', async () => {
            const expectedUser = {
                id: 1,
                nombre: 'Test User',
                email: 'test@example.com',
                rol: 'admin',
            };

            mockUserRepository.findOne.mockResolvedValue(expectedUser);

            const result = await usersService.findOne(1);

            expect(result).toEqual(expectedUser);
        });
    });
});
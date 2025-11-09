import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('Hello World!');
    });

    describe('Auth E2E', () => {
        it('/auth/register (POST) - debería registrar un usuario', () => {
            return request(app.getHttpServer())
                .post('/auth/register')
                .send({
                    username: 'testuser',
                    password: 'testpass123',
                    email: 'test@example.com',
                    nombre: 'Test User' // ← AGREGAR ESTE CAMPO
                })
                .expect(201);
        });

        it('/auth/login (POST) - debería hacer login', () => {
            return request(app.getHttpServer())
                .post('/auth/login')
                .send({
                    username: 'testuser',
                    password: 'testpass123'
                })
                .expect(201);
        });
    });

    describe('Users E2E', () => {
        it('/users (GET) - debería requerir autenticación', () => {
            return request(app.getHttpServer())
                .get('/users')
                .expect(401); // No autorizado sin token
        });
    });
});
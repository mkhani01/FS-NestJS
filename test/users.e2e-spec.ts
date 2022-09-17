import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  const TOKEN = request(app.getHttpServer()).post('api/auth/login').send({
    username: 'TEST_ADMIN',
    password: 'admin1234',
  });
  describe('Creating new user POST /api/users/create ', () => {
    const users_url = 'api/users/create';
    it('Should create a new user', () => {
      return request(app.getHttpServer())
        .post(users_url)
        .set('authorization', `bearer ${TOKEN}`)
        .send({
          name: 'Test',
          lastname: 'test',
          username: 'TEST',
          password: 'test1234',
          phoneNumber: '+989370376606',
          nationalCode: '0024123358',
          email: 'm@m.com',
        })
        .expect(201 || 200);
    });
  });
});

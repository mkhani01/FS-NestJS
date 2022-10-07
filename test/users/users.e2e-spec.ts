import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let token: any;
  const loginBody = {
    username: 'TEST_ADMIN',
    password: 'admin1234',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
    const loginRes = await request(app.getHttpServer())
      .post('/api/auth/login')
      .send(loginBody);
    token = JSON.parse(loginRes.text).access_token;
  });

  beforeEach(async () => {});
  it('Should get all users', async () => {
    return request(app.getHttpServer())
      .get('/api/Users/search')
      .set('Authorization', `bearer ${token}`)
      .expect(200);
  });
  afterAll((done) => {
    app.close();
    done();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { setupApp } from "../src/set-up";

describe('Authentication System', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    setupApp(app)
    await app.init();
  });

  it('handles a signup request', () => {
    const email = 'asdfassdf@asdf.com'
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email,password:'asdfafds'})
      .expect(201)
      .then((res)=>{
        const { id, email} = res.body
        expect(id).toBeDefined()
        expect(email).toEqual(email)
      })
  });
});

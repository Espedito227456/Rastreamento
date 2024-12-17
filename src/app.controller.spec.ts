import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
expect(received).toBe(expected) // Object.is equality

Expected: "Hello World!"
Received: "Olá Mundo!"

  17 |   describe('root', () => {
  18 |     it('should return "Hello World!"', () => {
> 19 |       expect(appController.getHello()).toBe('Hello World!');
     |                                        ^
  20 |     });
  21 |   });
  22 | });

  at Object.<anonymous> (app.controller.spec.ts:19:40)
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

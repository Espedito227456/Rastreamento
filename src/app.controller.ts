import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): string {
    return 'Bem-vindo à aplicação!';
  }

  @Get('test/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}

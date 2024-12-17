import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutesModule } from './routes/routes.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';  // Importa o AppController
import { AppService } from './app.service';        // Importa o AppService

@Module({
  imports: [
    ConfigModule.forRoot(),               // Certifique-se de que as variáveis de ambiente estão carregadas
    MongooseModule.forRoot(process.env.DATABASE_URL), // Conecta ao MongoDB
    RoutesModule,                         // Importa o módulo de rotas
  ],
  controllers: [AppController],  // Adiciona o AppController
  providers: [AppService],      // Adiciona o AppService
})
export class AppModule {}

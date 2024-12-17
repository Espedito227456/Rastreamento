import * as dotenv from 'dotenv';
dotenv.config();  // Carrega as variáveis do arquivo .env

// Agora você pode acessar as variáveis com process.env
console.log(process.env.DB_HOST); // Exemplo de acesso à variável de ambiente DB_HOST

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Cria a aplicação NestJS utilizando o módulo principal
  const app = await NestFactory.create(AppModule);

  // Inicializa o servidor na porta especificada ou 8080 por padrão
  const port = process.env.PORT || 8080; // Usa a variável de ambiente PORT ou 8080 como valor padrão
  await app.listen(port);

  console.log(`Aplicação rodando na porta ${port}`); // Exibe a porta no console
}

bootstrap();

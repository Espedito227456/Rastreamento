import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  
  async onModuleInit() {
    try {
      await this.$connect();  // Conecta ao banco de dados
      console.log('Prisma connected');
    } catch (error) {
      console.error('Error connecting to Prisma: ', error);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();  // Desconecta do banco de dados quando o módulo for destruído
    console.log('Prisma disconnected');
  }
}

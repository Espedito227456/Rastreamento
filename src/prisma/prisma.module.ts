import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()  // Tornar o módulo global, se necessário
@Module({
  providers: [PrismaService],
  exports: [PrismaService],  // Expor para ser utilizado em outros módulos
})
export class PrismaModule {}

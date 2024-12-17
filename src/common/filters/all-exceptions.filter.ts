import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch() // Ou você pode especificar tipos de exceção aqui, mas para pegar todas as exceções, basta usar o Catch sem parâmetros
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse(); // A resposta HTTP
    const request = host.switchToHttp().getRequest(); // A requisição HTTP

    const status = exception?.status || 500; // O status da resposta, 500 por padrão
    const message = exception?.message || 'Internal server error'; // Mensagem do erro

    // Envia a resposta com o erro para o cliente
    response.status(status).json({
      statusCode: status,
      message: message,
      path: request.url, // O caminho que causou o erro
    });
  }
}

import { Controller, Get, Query } from '@nestjs/common'; // Corrigido: Adicionado o import do @Get()
import { DirectionsService } from './directions.service'; // Certifique-se de importar corretamente o serviço

@Controller('directions')
export class DirectionsController {
    constructor(private readonly directionsService: DirectionsService) {}

    @Get() // Mapeia a requisição GET para este método
    getDirections(
        @Query('originId') originId: string, // Obtém o 'originId' dos parâmetros de consulta
        @Query('destinationId') destinationId: string, // Obtém o 'destinationId' dos parâmetros de consulta
    ) {
        return this.directionsService.getDirections(originId, destinationId); // Chama o serviço para buscar as direções
    }
}

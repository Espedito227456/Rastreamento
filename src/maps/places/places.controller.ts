import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async getPlaces(@Query('text') text: string) {
    if (!text) {
      throw new Error('O parâmetro "text" é obrigatório');
    }
    
    // Chama o serviço que faz a busca pelos lugares
    const places = await this.placesService.findPlaces(text);
    
    return places; // Retorna a resposta com os lugares encontrados
  }
}

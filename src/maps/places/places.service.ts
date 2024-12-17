import { Injectable } from '@nestjs/common';
import { Client as GoogleMapsClient, FindPlaceFromTextResponseData, PlaceInputType } from '@googlemaps/google-maps-services-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlacesService {
  constructor(
    private readonly googleMapsClient: GoogleMapsClient,
    private readonly configService: ConfigService, // Garantindo a correta configuração
  ) {}

  // Método para buscar lugares usando texto
  async findPlaces(text: string): Promise<FindPlaceFromTextResponseData> {
    try {
      const response = await this.googleMapsClient.findPlaceFromText({
        params: {
          input: text, // Texto que representa o endereço ou local
          inputtype: PlaceInputType.textQuery, // Tipo de input para texto (usando a enumeração correta)
          fields: ['place_id', 'formatted_address', 'geometry', 'name'], // Campos que você quer receber na resposta
          key: this.configService.get('GOOGLE_MAPS_API_KEY'), // Chave de API configurada no .env ou no config service
        },
      });

      // Verificando se a resposta tem resultados
      if (response.data.candidates.length === 0) {
        throw new Error('Nenhum lugar encontrado para o texto fornecido.');
      }

      return response.data; // Retorna a resposta com os candidatos encontrados

    } catch (error) {
      // Tratamento de erros, como erros na API ou falha na solicitação
      console.error('Erro ao buscar lugares:', error);
      throw new Error('Erro ao buscar lugares. Tente novamente mais tarde.');
    }
  }
}

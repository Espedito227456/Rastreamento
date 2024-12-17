import { IsString, IsNumber, IsEmail } from 'class-validator';

export class CreateRouteDto {
  @IsString()
  name: string;

  @IsString()
  sourceName: string;

  @IsNumber()
  sourceLat: number;

  @IsNumber()
  sourceLng: number;

  @IsString()
  destinationName: string;

  @IsNumber()
  destinationLat: number;

  @IsNumber()
  destinationLng: number;

  @IsNumber()
  distance: number;

  @IsNumber()
  duration: number;

  @IsString()
  directions: string;

  @IsEmail()
  email: string; // Valida o campo como um e-mail
}

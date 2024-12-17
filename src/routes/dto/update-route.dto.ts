// src/routes/dto/update-route.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteDto } from './create-route.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRouteDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  startLocation?: string; // Adicionando startLocation

  @IsOptional()
  @IsString()
  endLocation?: string; // Adicionando endLocation
}

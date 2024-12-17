// src/routes/routes.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Route } from './schemas/route.schema';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name) private routeModel: Model<Route>, // Injeção do modelo
  ) {}

  async create(createRouteDto: CreateRouteDto) {
    const newRoute = new this.routeModel(createRouteDto);
    return await newRoute.save(); // Salva a nova rota no banco de dados
  }

  async findAll() {
    return this.routeModel.find().exec(); // Retorna todas as rotas
  }

  async findOne(id: string) {
    return this.routeModel.findById(id).exec(); // Retorna uma rota com base no id
  }

  async update(id: string, updateRouteDto: UpdateRouteDto) {
    return this.routeModel.findByIdAndUpdate(id, updateRouteDto, { new: true }).exec(); // Atualiza uma rota
  }

  async remove(id: string) {
    return this.routeModel.findByIdAndDelete(id).exec(); // Deleta uma rota
  }
}

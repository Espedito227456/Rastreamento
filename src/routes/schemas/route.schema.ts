// src/routes/schemas/route.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Definindo a estrutura do Route
@Schema()
export class Route extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  sourceName: string;

  @Prop({ required: true })
  sourceLat: number;

  @Prop({ required: true })
  sourceLng: number;

  @Prop({ required: true })
  destinationName: string;

  @Prop({ required: true })
  destinationLat: number;

  @Prop({ required: true })
  destinationLng: number;

  @Prop({ required: true })
  distance: number;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  directions: string;

  @Prop({ required: true })
  email: string;
}

// Criando o modelo do Route a partir do esquema
export const RouteSchema = SchemaFactory.createForClass(Route);

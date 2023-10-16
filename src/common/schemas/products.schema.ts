import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ProductsDocument = Products & Document;

@Schema({ timestamps: true, collection: 'Products' })
export class Products {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true, select: false })
  description: number;

  @Prop({ required: false })
  price: string;

  @Prop({ required: false })
  category: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: false })
  stockQuantity: Number;
}
export const ProductsSchema = SchemaFactory.createForClass(Products);

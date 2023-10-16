import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UsersDocument = Users & Document;
@Schema({ timestamps: true, collection: 'Users' })
export class Users {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, select: false })
  password: number;

  @Prop({ required: false })
  firstName: string;

  @Prop({ required: false })
  lastName: string;
}
export const UsersSchema = SchemaFactory.createForClass(Users);

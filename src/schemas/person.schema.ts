import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Person extends Document {
  @Prop({ type: String, required: false })
  name: string;
  @Prop({ type: Number, required: false })
  age: number;
  @Prop({ type: String, required: false })
  gender: string;
  @Prop({ type: String, required: false })
  address: string;
}
export const PersonSchema = SchemaFactory.createForClass(Person);

import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  companyname: String,
  ceo: String,
  address: String,
  inceptiondate: Date,
});

export interface User extends mongoose.Document {
  companyname: string;
  ceo: string;
  address: string;
  inceptiondate: Date;
}

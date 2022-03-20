import * as mongoose from 'mongoose';
export const TeamSchema = new mongoose.Schema({
  teamlead: String,
  companyid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

export interface Team extends mongoose.Document {
  teamlead: string;
  companyid: string;
}

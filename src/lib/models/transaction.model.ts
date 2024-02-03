import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
  amount: number;
  category: string;
  description: string;
  date: Date;
}

const transactionSchema: Schema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const Transaction = mongoose.model<ITransaction>(
  'Transaction',
  transactionSchema
);

export default Transaction;

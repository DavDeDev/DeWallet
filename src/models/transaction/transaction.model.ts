import mongoose, { Schema, Document, InferSchemaType } from 'mongoose';

interface Transaction extends Document {
  to: { type: mongoose.Schema.Types.ObjectId; ref: 'account' } | string;
  from: { type: mongoose.Schema.Types.ObjectId; ref: 'account' } | string;
  timestamp: Date;
  amount: number;
  currency: string;
  amountInEur: number;
  description?: string;
  category: { type: mongoose.Schema.Types.ObjectId; ref: 'category' };
}

const transactionSchema = new Schema<Transaction>({
  to: {
    type: Schema.Types.Mixed,
    trim: true,
    required: true
  },
  from: {
    type: Schema.Types.Mixed,
    trim: true,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  amountInEur: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true
  }
});

export type TTransaction = InferSchemaType<typeof transactionSchema>;

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model('Transaction', transactionSchema);

export { Transaction };

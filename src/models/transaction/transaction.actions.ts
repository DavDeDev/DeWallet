import { connectToDB } from '@/lib/database';
import { TTransaction, Transaction } from './transaction.model';

export async function createTransaction({
  to,
  from,
  timestamp,
  amount,
  currency,
  amountInEur,
  description,
  category
}: TTransaction): Promise<void> {
  try {
    await connectToDB();

    const createdTransaction: TTransaction = await Transaction.create({
      to,
      from,
      timestamp,
      amount,
      currency,
      amountInEur,
      description,
      category
    });
    console.log(createdTransaction);
    // revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create transaction: ${error.message}`);
  }
}

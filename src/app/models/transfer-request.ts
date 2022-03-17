import { TransactionType } from '../enums/transaction-type';

export class TransferRequest {
  fromAccNumber: number | null = null;
  toAccNumber: number | null = null;
  amount: number | null = null;
  reason: string | null = null;
  by: number | null = null;

  transactionType: TransactionType | null = TransactionType.DEBIT;
}

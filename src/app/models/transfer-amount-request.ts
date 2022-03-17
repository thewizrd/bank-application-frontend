import { TransactionType } from '../enums/transaction-type';

export class TransferAmountRequest {
  fromAccNumber: number | null = null;
  toAccNumber: number | null = null;
  amount: number | null = null;
  reason: string | null = null;
  byStaff: string | null = null;

  transactionType: TransactionType | null = TransactionType.DEBIT;
}

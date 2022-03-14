import { TransactionType } from '../enums/transaction-type';

export interface TransactionsResponse {
  date: string;
  reference: string;
  amount: number;
  transactionType: TransactionType;
}

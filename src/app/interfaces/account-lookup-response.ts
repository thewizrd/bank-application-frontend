import { TransactionLookupResponse } from './transaction-lookup-response';

export interface AccountLookupResponse {
  accountNumber: number;
  firstName: string;
  lastName: string;
  balance: number;
  transactions: TransactionLookupResponse[];
}

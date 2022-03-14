import { AccountStatus } from '../enums/account-status';
import { AccountType } from '../enums/account-type';
import { TransactionsResponse } from './transactions-response';

export interface AccountDetailsResponse {
  accountNumber: number;
  accountType: AccountType;
  accountBalance: number;
  accountStatus: AccountStatus;
  transaction: TransactionsResponse[];
}

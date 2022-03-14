import { AccountType } from '../enums/account-type';

export interface CreateAccountResponse {
  accountType: AccountType;
  accountBalance: number;
  approved: boolean;
  accountNumber: number;
  dateOfCreation: string;
  customerID: number;
}

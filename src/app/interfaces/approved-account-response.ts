import { AccountType } from '../enums/account-type';

export interface ApprovedAccountResponse {
  accountType: AccountType;
  firstName: string;
  lastName: string;
  accountNumber: number;
  dateCreated: string;
  approved: string;
  staffUserName: string;
}

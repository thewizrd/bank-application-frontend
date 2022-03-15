import { AccountType } from '../enums/account-type';

export interface AddBeneficiaryResponse {
  accountNumber: number;
  accountType: AccountType;
  approved: boolean;
}

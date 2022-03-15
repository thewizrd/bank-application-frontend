import { AccountType } from '../enums/account-type';

export class AddBeneficiaryRequest {
  accountNumber: number | null = null;
  accountType: AccountType | null = AccountType.CHECKING;
}

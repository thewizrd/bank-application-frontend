import { AccountType } from '../enums/account-type';

export class CreateAccountRequest {
  accountType: AccountType | null = AccountType.CHECKING;
  accountBalance: number | null = null;
  //approved: boolean = false;
}

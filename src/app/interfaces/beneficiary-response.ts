import { BeneficiaryStatus } from '../enums/beneficiary-status';

export interface BeneficiaryResponse {
  beneficiaryID: number;
  beneficiaryAccountNo: number;
  beneficiaryName: string;
  active: BeneficiaryStatus;
}

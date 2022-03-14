import { CustomerStatus } from '../enums/customer-status';

export interface CustomerResponseFromStaff {
  id: number;
  username: string;
  fullName: string;

  customerStatus: CustomerStatus;
  createDate: string;
}

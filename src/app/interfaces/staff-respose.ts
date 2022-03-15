import { CustomerStatus } from '../enums/customer-status';

export interface StaffRespose {
  staffId: number;
  staffName: string;
  staffUserName: string;
  status: CustomerStatus;
}

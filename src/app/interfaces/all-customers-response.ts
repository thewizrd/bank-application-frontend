import { CustomerStatus } from '../enums/customer-status';

export interface AllCustomersResponse {
  customerId: number;
  customerName: string;
  status: CustomerStatus;
}

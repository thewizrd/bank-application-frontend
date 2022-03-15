import { CustomerStatus } from '../enums/customer-status';

export class UpdateCustomerStatusRequest {
  customerId: number | null = null;
  status: CustomerStatus = CustomerStatus.ENABLED;
}

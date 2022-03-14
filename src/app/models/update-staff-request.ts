import { CustomerStatus } from '../enums/customer-status';

export class UpdateStaffRequest {
  staffId: number | null = null;
  status: CustomerStatus = CustomerStatus.ENABLED;
}

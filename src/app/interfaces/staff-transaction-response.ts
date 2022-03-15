export interface StaffTransactionResponse {
  fromAccNumber: number;
  toAccNumber: number;
  amount: number;
  reason: string;
  byStaff: string;
}

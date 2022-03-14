export interface CustomerResponse {
  id: number;
  username: string;
  firstName: string;
  lastName: string;

  secretQuestion: string;
  secretAnswer: string;

  phone: string;

  pan: string;
  aadhar: string;
}

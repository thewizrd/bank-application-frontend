export interface JwtResponse {
  token: string;
  type: string;
  id: number;
  username: string;
  roles: string[];
}

export interface User {
  uuid: string;
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  role: string[];
  createdAt: Date;
}
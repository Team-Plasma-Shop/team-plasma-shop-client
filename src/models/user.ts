export interface User {
  uuid: string;
  username: string;
  email: string;
  isVerified: boolean;
  role: string[];
  createdAt: Date;
}
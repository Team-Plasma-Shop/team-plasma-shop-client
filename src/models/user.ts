export interface User {
  '@id'?: string
  id: string;
  username: string;
  email: string;
  isVerified: boolean;
  role: string[];
}
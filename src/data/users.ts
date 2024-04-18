import { User } from "../models/user";

const users: User[] = [
  {
    id: '1',
    username: 'john_doe',
    email: 'john.doe@example.com',
    isVerified: true,
    role: ['user'],
  },
  {
    id: '2',
    username: 'jane_doe',
    email: 'jane.doe@example.com',
    isVerified: true,
    role: ['user'],
  },
  {
    id: '3',
    username: 'admin_user',
    email: 'admin.user@example.com',
    isVerified: true,
    role: ['admin'],
  },
  {
    id: '4',
    username: 'guest_user',
    email: 'guest.user@example.com',
    isVerified: false,
    role: ['guest'],
  },
  {
    id: '5',
    username: 'test_user',
    email: 'test.user@example.com',
    isVerified: true,
    role: ['user', 'tester'],
  },
];

export default users
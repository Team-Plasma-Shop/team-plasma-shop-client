import { User } from "../models/user";

const users: User[] = [
  {
    id: '1',
    username: 'john_doe',
    email: 'john.doe@example.com',
    isVerified: true,
    roles: ['user'],
  },
  {
    id: '2',
    username: 'jane_doe',
    email: 'jane.doe@example.com',
    isVerified: true,
    roles: ['user'],
  },
  {
    id: '3',
    username: 'admin_user',
    email: 'admin.user@example.com',
    isVerified: true,
    roles: ['admin'],
  },
  {
    id: '4',
    username: 'guest_user',
    email: 'guest.user@example.com',
    isVerified: false,
    roles: ['guest'],
  },
  {
    id: '5',
    username: 'test_user',
    email: 'test.user@example.com',
    isVerified: true,
    roles: ['user', 'tester'],
  },
];

export default users
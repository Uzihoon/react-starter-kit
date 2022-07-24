export interface User {
  user: {
    userId: string;
    firstName: string;
    lastName: string;
    roles: string[];
  };
  token: string;
  expiresAt: string;
}

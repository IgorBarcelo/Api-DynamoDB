export type UserType = 'owner' | 'customer';

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
}

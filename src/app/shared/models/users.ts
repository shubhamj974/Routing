export interface Iuser {
  userName: string;
  id: number;
  userType: userType;
}

export enum userType {
  Admin = 'Admin',
  User = 'User',
}

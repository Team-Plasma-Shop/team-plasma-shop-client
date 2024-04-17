export interface Pokemon {
  uuid: string;
  name: string;
  imageLink: string;
  price: number;
  owner: string;
  isSold: boolean;
  createdAt: Date;
  modifiedAt: Date;
}
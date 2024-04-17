export
interface Pokemon {
  uuid: string;
  name: string;
  imageLink: string;
  price: number;
  type: string;
  owner: string;
  isSold: boolean
  createdAt: Date;
  modifiedAt: Date;
}
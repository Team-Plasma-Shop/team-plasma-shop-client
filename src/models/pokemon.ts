export
interface Pokemon {
  id: string;
  name: string;
  imageLink: string;
  price: number;
  type: string;
  owner: string;
  modifiedAt?: Date;
}
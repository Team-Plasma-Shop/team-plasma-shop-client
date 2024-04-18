import { Pokemon } from "../models/pokemon";

const pokemons: Pokemon[] = [
  {
    id: '1',
    name: 'Bulbasaur',
    imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    price: 100,
    type: 'Grass',
    owner: 'Ash Ketchum',
    isSold: false,
    modifiedAt: new Date(),
  },
  {
    id: '2',
    name: 'Charmander',
    imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    price: 150,
    type: 'Fire',
    owner: 'Gary Oak',
    isSold: false,
    modifiedAt: new Date(),
  },
  {
    id: '3',
    name: 'Squirtle',
    imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    price: 120,
    type: 'Water',
    owner: 'Misty',
    isSold: true,
    modifiedAt: new Date(),
  },
];

export default pokemons
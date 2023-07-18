import { useLoaderData } from 'react-router-dom';
import PokemonApp from '../components/Work_Pokemon/Work_Pokemon';

export default function Work1() {
  const data = useLoaderData();
  return <PokemonApp data={data} />;
}

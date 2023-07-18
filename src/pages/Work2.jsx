import { useLoaderData } from 'react-router-dom';
import Portfolio from '../components/Work_Portfolio/Work_Portfolio';

export default function Work2() {
  const data = useLoaderData();
  return <Portfolio data={data} />;
}

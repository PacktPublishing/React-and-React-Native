import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout.js';
import { fetchSecondItems } from '../api';

const Second = ({ items }) => (
  <Layout>{items.map(i => <li key={i}>{i}</li>)}</Layout>
);

Second.getInitialProps = async () => {
  const res = await fetchSecondItems();
  const items = await res.json();

  return { items };
};

export default Second;

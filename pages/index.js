import fetch from 'node-fetch';
import Head from 'next/head';
import DefaultLayout from '../layout/DefaultLayout';
import CoffeeListing from '../components/CoffeeListing';

export default function HomePage({ coffees }) {
  return (
    <>
      <Head>
        <title>Strapi Broast</title>
      </Head>
      <DefaultLayout>
        <header className="container mx-auto mb-8">
          <h1 className="font-bold text-5xl">All Coffee</h1>
        </header>
        <CoffeeListing coffees={coffees} />
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps() {
  // TODO: Move to lib
  const coffees = await fetch(
    `${process.env.NEXT_BASE_URL}/.netlify/functions/load-coffee`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    props: {
      coffees,
    },
  };
}

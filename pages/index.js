import Head from 'next/head';
import DefaultLayout from '@/layout/DefaultLayout';
import CoffeeListing from '@/components/CoffeeListing';
import { getCoffee } from '@/lib/utils';

export default function HomePage({ coffees }) {
  return (
    <>
      <Head>
        <title>Strapi Broast</title>
      </Head>
      <DefaultLayout>
        <header className="container mx-auto mb-8 px-4">
          <h1 className="font-bold text-5xl">All Coffee</h1>
        </header>
        <CoffeeListing coffees={coffees} />
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps() {
  const coffees = await getCoffee();

  return {
    props: {
      coffees: coffees || [],
    },
  };
}

import React from 'react';
import { useRouter } from 'next/router';
import { getCoffee, findCoffee } from '@/lib/utils';
import Head from 'next/head';
import Link from 'next/link';
import DefaultLayout from '@/layout/DefaultLayout';

export default function Coffee({ coffee }) {
  const thumbnail = coffee.thumbnail.formats.medium
    ? coffee.thumbnail.formats.medium.url
    : coffee.thumbnail.url;

  const router = useRouter();

  return (
    <DefaultLayout>
      <Head>
        <title>{coffee.name} | Strapi Broast</title>
      </Head>
      <div className="container mx-auto px-4">
        <span
          onClick={() => router.back()}
          className="cursor-pointer hover:underline"
        >
          &lt; Back
        </span>
      </div>
      <article>
        <section className="container mt-8 mx-auto">
          <div className="flex flex-wrap lg:items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <img
                src={thumbnail}
                alt={coffee.alternativeText}
                className="inline-block w-2/3 lg:w-full"
              />
            </div>
            <div className="text-center lg:text-left w-full lg:w-1/2">
              <span className="text-gray-700 font-medium">
                <Link
                  href="/roaster/[slug]"
                  as={`/roaster/${coffee.roaster.Slug}`}
                >
                  <a>{coffee.roaster.name}</a>
                </Link>
              </span>
              <h1 className="font-semibold text-gray-900 text-3xl">
                {coffee.name}
              </h1>
              <span className="text-gray-700">
                ${coffee.price} | {coffee.bag_weight} oz.
              </span>
              <p className="w-full sm:w-2/3 lg:w-full mx-auto my-4">
                {coffee.description}
              </p>
              {coffee.source_link && (
                <a
                  href={coffee.source_link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block rounded-lg px-6 py-3 bg-green-200 text-green-800 mt-4 font-medium hover:bg-green-600 hover:text-green-100"
                >
                  Where To Buy
                </a>
              )}
            </div>
          </div>
        </section>
        <section className="bg-gray-200 mt-8 py-6">
          <div className="container mx-auto flex flex-wrap lg:flex-no-wrap text-center justify-between">
            <div className="rounded-md w-full lg:w-1/2 bg-white px-4 py-8 mb-4 lg:mb-0 lg:mr-4 flex flex-col justify-center">
              <h2 className="font-medium">Roast Level</h2>
              <p className="font-bold text-xl">{coffee.roast_level}</p>
            </div>
            <div className="rounded-md w-full lg:w-1/2 bg-white px-4 py-8">
              <h2 className="font-medium">Tastes Like</h2>
              <p className="font-bold text-xl">{coffee.flavor_profile.name}</p>
              {coffee.flavor_profile.brief_description && (
                <p>{coffee.flavor_profile.brief_description}</p>
              )}
            </div>
          </div>
        </section>
      </article>
    </DefaultLayout>
  );
}

export async function getStaticProps({ params }) {
  const coffee = await findCoffee(params.slug);

  return {
    props: {
      coffee,
    },
  };
}

export async function getStaticPaths() {
  const allCoffee = await getCoffee();

  return {
    paths: allCoffee.map((coffee) => `/coffee/${coffee.slug}`),
    fallback: true,
  };
}

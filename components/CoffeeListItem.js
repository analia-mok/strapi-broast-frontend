import React from 'react';
import Link from 'next/link';

export default function CoffeeListItem({ coffee }) {
  const thumnail =
    coffee.thumbnail.formats.thumbnail.url || coffee.thumbnail.url;

  return (
    <article className="border border-gray-400 rounded-md bg-white">
      <Link href="/coffee/[slug]" as={`/coffee/${coffee.slug}`}>
        <a className="group hover:cursor-pointer">
          <div className="text-center py-4">
            <img
              src={thumnail}
              alt={coffee.thumbnail.alternativeText}
              className="inline-block mx-auto group-hover:translate-y-4 transition-transform duration-75"
            />
          </div>
          <div className="m-4 mt-0 pt-4 border-t border-gray-400">
            <span className="text-gray-700">{coffee.roaster.name}</span>
            <h2 className="font-semibold text-xl text-gray-900 leading-tight group-hover:underline">
              {coffee.name}
            </h2>
            <span className="text-gray-900">
              ${parseFloat(coffee.price).toFixed(2)}
            </span>
          </div>
        </a>
      </Link>
    </article>
  );
}

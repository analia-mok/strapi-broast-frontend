import React from 'react';

export default function CoffeeListItem({ coffee }) {
  const thumnail =
    coffee.thumbnail.formats.thumbnail.url || coffee.thumbnail.url;
  // TODO: Wrap in next/link after setting up static paths.
  return (
    <article className="border border-gray-400 rounded-md">
      <div className="text-center py-4">
        <img
          src={thumnail}
          alt={coffee.thumbnail.alternativeText}
          className="inline-block mx-auto"
        />
      </div>
      <div className="p-4">
        <span className="text-gray-700">{coffee.roaster.name}</span>
        <h2 className="font-semibold text-xl text-gray-900 leading-tight">
          {coffee.name}
        </h2>
        <span className="text-gray-900">${coffee.price}</span>
      </div>
    </article>
  );
}

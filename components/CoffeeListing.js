import React from 'react';
import CoffeeListItem from '@/components/CoffeeListItem';

export default function CoffeeListing({ coffees }) {
  // TODO:
  // Filter on:
  // Roaster
  // Roast Level
  // Flavor Profile
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        {coffees.length === 0 && <strong>No Coffee Is Available</strong>}
        {coffees &&
          coffees.map((coffee) => {
            return (
              <div
                key={`coffee_${coffee.id}`}
                className="w-full md:w-1/2 lg:w-1/3 flex-grow flex-shrink px-2 mb-4"
              >
                <CoffeeListItem coffee={coffee} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

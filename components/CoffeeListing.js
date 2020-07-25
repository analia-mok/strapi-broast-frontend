import React from 'react';
import CoffeeListItem from './CoffeeListItem';

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
              <div className="w-1/3 flex-grow flex-shrink px-2 mb-4">
                <CoffeeListItem key={coffee.id} coffee={coffee} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

import fetch from 'node-fetch';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export async function getCoffee() {
  const coffees = await fetch(
    `${process.env.NEXT_BASE_URL}/.netlify/functions/get-all-coffee`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return coffees || [];
}

export async function findCoffee(slug) {
  const coffee = await fetch(
    `${process.env.NEXT_BASE_URL}/.netlify/functions/find-coffee?slug=${slug}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  if (coffee.length) {
    return coffee[0];
  }

  return {};
}

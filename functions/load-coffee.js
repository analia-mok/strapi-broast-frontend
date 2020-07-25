const fetch = require('node-fetch');
require('es6-promise').polyfill();
require('isomorphic-fetch');

exports.handler = async () => {
  const response = await fetch(`${process.env.STRAPI_PROD_URL}/coffees`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

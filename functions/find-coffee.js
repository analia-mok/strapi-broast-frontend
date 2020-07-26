const fetch = require('node-fetch');
const querystring = require('querystring');

exports.handler = async (event, context) => {
  const params = querystring.stringify(event.queryStringParameters);
  const response = await fetch(
    `${process.env.STRAPI_PROD_URL}/coffees?${params}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

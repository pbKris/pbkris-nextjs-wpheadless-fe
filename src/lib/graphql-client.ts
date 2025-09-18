import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT;

if (!endpoint) {
  throw new Error('WORDPRESS_GRAPHQL_ENDPOINT is not defined in .env.local');
}

export const graphqlClient = new GraphQLClient(endpoint);

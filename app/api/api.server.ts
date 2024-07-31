import { Configuration, ProductsApi } from '@heyrise/storefront-api';

/**
 * Gets the generated API services which can be used to access API data
 * APIs are generated using OpenAPI Generator typescript-fetch (https://openapi-generator.tech/docs/generators/typescript-fetch/)
 * @returns {Object} - API Services which are ready to be used
 */
export function getApi() {
  const configuration = new Configuration({
    basePath: process.env.API_BASE,
  });

  return {
    productsApi: new ProductsApi(configuration),
  };
}

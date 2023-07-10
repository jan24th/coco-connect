import { GraphQLClient } from "graphql-request";
import { getSdk, type Sdk } from "./generated";

const env = process.env;

export const createClientBase = (
  clientUrl: string,
  getHeaders?: () => Record<string, string>
): Sdk => {
  const headers = getHeaders?.() || {};
  Object.assign(headers, { ["Content-Type"]: "application/json" });
  return getSdk(new GraphQLClient(clientUrl, { headers, method: "POST" }));
};

const requestHeaders = (headers: Record<string, string> = {}) => {
  Object.assign(headers, { ["Authorization"]: `Bearer ${env.GRAPHQL_TOKEN}` });
  return headers;
};

export const api = () => {
  const client = createClientBase(env.END_POINT, requestHeaders);
  return {
    getPosts: () =>
      client.getPosts().then((res) => res.posts.data.at(0)?.attributes),
  };
};

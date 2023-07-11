import { GraphQLClient } from 'graphql-request'
import { type Sdk, getSdk } from './generated'

const env = process.env

export function createClientBase(
  clientUrl: string,
  getHeaders?: () => Record<string, string>,
): Sdk {
  const headers = getHeaders?.() || {}
  Object.assign(headers, { 'Content-Type': 'application/json' })
  return getSdk(
    new GraphQLClient(clientUrl, { headers, method: 'POST', fetch }),
  )
}

function requestHeaders(headers: Record<string, string> = {}) {
  Object.assign(headers, { Authorization: `Bearer ${env.GRAPHQL_TOKEN}` })
  return headers
}

export function api() {
  const client = createClientBase(env.END_POINT, requestHeaders)
  return {
    getPosts: () =>
      client.getPosts().then(res => res.posts.data),
  }
}

const BASE_URL = 'https://official-joke-api.appspot.com'
const BATCH_SIZE = 60

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function request(path) {
  const response = await fetch(`${BASE_URL}${path}`)

  if (!response.ok) {
    const message =
      response.status === 404
        ? 'We could not find that joke.'
        : `The server responded with an error (${response.status}).`
    throw new ApiError(message, response.status)
  }

  const data = await response.json()

  // The API can answer an unknown id with an error object instead of a joke.
  if (data.type === 'error') {
    throw new ApiError('We could not find that joke.', 404)
  }

  return data
}

export async function fetchJokes() {
  const jokes = await request(`/jokes/random/${BATCH_SIZE}`)
  // A random batch can contain repeats, so keep one joke per id.
  return [...new Map(jokes.map((joke) => [joke.id, joke])).values()]
}

export function fetchJoke(id) {
  return request(`/jokes/${encodeURIComponent(id)}`)
}

import { useQuery } from '@tanstack/react-query'
import { fetchJoke, fetchJokes } from '../api/jokes'

export const jokeKeys = {
  all: ['jokes'],
  list: () => [...jokeKeys.all, 'list'],
  detail: (id) => [...jokeKeys.all, 'detail', id],
}

export function useJokes() {
  return useQuery({
    queryKey: jokeKeys.list(),
    queryFn: fetchJokes,
    // The list is a random batch, so keep it steady until the user shuffles.
    staleTime: Infinity,
  })
}

export function useJoke(id) {
  return useQuery({
    queryKey: jokeKeys.detail(id),
    queryFn: () => fetchJoke(id),
    enabled: Boolean(id),
  })
}

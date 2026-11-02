import JokeCard from './JokeCard'

export default function JokeList({ jokes }) {
  return (
    <ul className="grid gap-3">
      {jokes.map((joke) => (
        <JokeCard key={joke.id} joke={joke} />
      ))}
    </ul>
  )
}
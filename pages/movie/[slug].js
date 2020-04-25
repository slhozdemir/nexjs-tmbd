import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function MovieDetail({ movie }) {
  return <h1>{movie.title}</h1>
}

export async function getServerSideProps(context) {
  const movieId = context.params.slug.split('-').slice(-1)[0]
  const data = await unfetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=148a68d49e546737c3a830d5df60f0d2&language=en-US`
  )
  const movie = await data.json()

  return {
    props: {
      movie
    }
  }
}

export default MovieDetail

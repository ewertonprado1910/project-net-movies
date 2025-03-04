import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Container, BackGround, Cover, Info, ContainerMovies } from "./styles"
import { getMovieCredits, getMoviesById, getMovieSimilar, getTrailers } from "../../services/getData"
import { getImages } from "../../utils/getImages"
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import Slider from "../../components/Slider"

function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieTrailers, setMovieTrailers] = useState()
    const [movieCredits, setMuvieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()


    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMoviesById(id),
                getTrailers(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
                .then(([movies, trailers, credits, similar]) => {
                    setMovie(movies)
                    setMovieTrailers(trailers)
                    setMuvieCredits(credits)
                    setMovieSimilar(similar)
                })

                .catch((error) => console.log(error))
        }
        getAllData()

    }, [])
    return (
        <>
            {movie && (
                <>
                    <BackGround image={getImages(movie.backdrop_path)} alt="background" />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt="background" />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <Credits credits={movieCredits} />
                        </Info>
                    </Container>
                    <ContainerMovies>
                        {movieTrailers && movieTrailers.map((video) => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
                                <iframe
                                    src={`http://www.youtube.com/embed/${video.key}`}
                                    title="Youtube Video Player"
                                    height="400px"
                                    width="100%" >
                                </iframe>
                            </div>
                        ))}

                    </ContainerMovies>
                    {movieSimilar && <Slider info={movieSimilar} title="Filmes Similares" />}
                </>
            )}
        </>
    )
}

export default Detail
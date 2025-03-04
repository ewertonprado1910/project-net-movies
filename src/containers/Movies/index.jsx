import { useEffect, useState } from "react"


import { Container } from "./styles"
import { getTopMovies } from "../../services/getData"
import Slider from "../../components/Slider"


function Movies() {
    const [movieScreen, setMovieScreen] = useState()
    
    useEffect(() => {
        async function getScreenMovies() {

            Promise.all([
                getTopMovies()
            ])
                .then(([movieScreen]) => {
                    setMovieScreen(movieScreen)
                })
        }
        getScreenMovies()
    }, [])


    return (
        <Container>
            {movieScreen && <Slider info={movieScreen} title={"Filmes"} />}

        </Container>

    )
}

export default Movies
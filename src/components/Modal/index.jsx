import { useEffect, useState } from "react"

import { getTrailers } from "../../services/getData"
import { Container, Background, ContainerButton } from "./styles"



function Modal({ movieId, setShowModal }) {
    const [trailers, setTrailers] = useState()

    useEffect(() => {
        async function getTrailersMovie() {
            setTrailers(await getTrailers(movieId))
        }

        getTrailersMovie()

    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            {trailers && (
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${trailers[0].key}`}
                        title="Youtube Video Player"
                        height="400px"
                        width="100%" >
                    </iframe>
                    <ContainerButton onClick={() => setShowModal(false)}>
                        ❌
                    </ContainerButton>
                </Container>
            )}
        </Background>


    )
}

export default Modal
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


import { Background, Info, Poster, Container, ContainerButtons } from "./styles"
import Button from "../../components/Button"
import Slider from "../../components/Slider"
import { getImages } from "../../utils/getImages"
import Modal from "../../components/Modal"
import { getMovies, getPerson, getSeriesPopular, getTopMovies, getTopSeries, getTvOnline } from "../../services/getData"


function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [seriesPopular, setSeriesPopular] = useState()
  const [person, setPerson] = useState()
  const [tvOnline, setTvOnline] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getSeriesPopular(),
        getPerson(),
        getTvOnline()
      ])
        .then(([movie, topMovies, topSeries, seriesPopular, person, tvOnline]) => {
          setMovie(movie)
          setTopMovies(topMovies)
          setTopSeries(topSeries)
          setSeriesPopular(seriesPopular)
          setPerson(person)
          setTvOnline(tvOnline)

        })
        .catch((error) => console.log(error))
    }
    getAllData()

  }, [])

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)} alt="background">
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista agora
                </Button>
                <Button onClick={() => setShowModal(true)}>Assista o traler</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="capa do filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Series"} />}
      {seriesPopular && <Slider info={seriesPopular} title={"Series Popular"} />}
      {person && <Slider info={person} title={"Artistas"} />}
      {tvOnline && <Slider info={tvOnline} title={"Filmes , Séries , Programas de tv e muito mais..."} />}
    </>
  )
}


export default Home



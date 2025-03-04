import { useState, useEffect } from "react"

import Slider from "../../components/Slider"
import { getTopSeries } from "../../services/getData"

import { Container } from "./styles"

function Series() {
    const [seriesScreen, setSeriesScreen] = useState()

    useEffect(() => {
        async function getSeriesScreen() {

            Promise.all([
                getTopSeries()
            ])
                .then(([seriesScreen]) => {
                    setSeriesScreen(seriesScreen)
                })
        }
        getSeriesScreen()
    }, [])

    return (
        <Container>
            {seriesScreen && <Slider info={seriesScreen} title={"Séries"} />}
        </Container>
    )
}

export default Series
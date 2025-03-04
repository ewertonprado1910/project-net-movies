import { Swiper, SwiperSlide } from "swiper/react"

import { TopMoviesContainer } from "./styles"
import Card from "../Card"

function Slider({ info = [], title }) {
    return (

        <TopMoviesContainer>
            <h2>{title}</h2>
            <Swiper
                grabCursor
                spaceBetween={15}
                slidesPerView={"auto"}
                className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </TopMoviesContainer>
    )
}

export default Slider
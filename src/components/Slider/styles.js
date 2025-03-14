import styled from "styled-components"

export const TopMoviesContainer = styled.div `
padding: 0 20px;

h2 {
    color: #ffffff;
    font-size: 25px;
    padding: 40px 0px 20px 20px;
    text-decoration: underline;
    text-decoration-color: #ffffff;
}
.swiper {
  width: 100%;
  overflow: hidden;
}
.swiper-wrapper {
  display: flex;
}

@media screen and (max-width: 800px) {
    .swiper-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    h2 {
        font-size: 10px;
        margin-top: -75px;
    }
  }
`
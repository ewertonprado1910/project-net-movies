import styled from "styled-components"

export const Container = styled.div`
background-color: #0f0f0f;
min-height: 100vh;
margin: 40px 0px;
pointer-events: none;

.swiper-wrapper {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   gap: 50px;
   
}
@media screen and (max-width: 800px) {
    .swiper-wrapper {
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
`

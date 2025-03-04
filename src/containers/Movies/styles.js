import styled from "styled-components"

export const Background = styled.div `
background: url(${props => props.img});
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
margin-top: 25px 0;

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    
}
`
export const Container = styled.div`
margin: 50px 0px;

.swiper-wrapper {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   gap: 50px;
   font-size: 12px;
}
`

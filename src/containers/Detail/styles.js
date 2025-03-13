import styled, { keyframes } from "styled-components"

const scale = keyframes`
from {
transform: scale(0)
}
to {
transform: scale(1)
}
`

export const BackGround = styled.div`
background-image: url(${(props) => props.image});
height: 50vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;

&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

&::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0 ));
}
`
export const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
max-width: 1500px;
margin-top: -100px;

@media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
}
`
export const Cover = styled.div`
padding: 20px;
display: flex;
align-items: flex-start;
height: 100%;
z-index: 99;

img {
    width: 400px;
    border-radius: 5px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.7s linear;
}
@media screen and (max-width: 800px){
    img {
        width: 250px;
    }
}
`
export const Info = styled.div`
padding: 20px;
width: 50%;
z-index: 99;
display: flex;
align-items: flex-start;
flex-direction: column;

h2 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
}

p {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
}
@media screen and (max-width: 800px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;

    p{
        text-align: center;
        font-size: 11px;
    }
}
`
export const ContainerMovies = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;

div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 25px 0;
}

h4 {
   color: #fff;
   font-size: 15px;
   font-weight: 700;
   margin-bottom: 10px;
}

iframe {
    border: none;
    border-radius: 10px;
}

@media screen and (max-width: 800px){
    h4 {
        text-align: center;
    }

    iframe {
        width: 300px;
        height: 250px;
        display: flex;
        align-self: center;
        
    }
    
}
`
import styled from "styled-components"

export const Background = styled.div `
height: 100vh;
width: 100vw;
z-index: 999;
background-color: rgba(0, 0, 0, 0.8);
position: absolute;
display: flex;
align-items: center;
justify-content: center;
`
export const Container = styled.div `
background: #000000;
width: 50%;
display: flex;
justify-content: center;
align-items: flex-start;
position: fixed;
padding: 40px ;
max-width: 1200px;

iframe {
    border: none;
}

@media screen and (max-width: 800px) {
    width: auto;
}
`
export const ContainerButton = styled.button `
background: #000;
font-size: 20px;
border: none;
cursor: pointer;
max-width: 4px;
margin-top: -30px;
`





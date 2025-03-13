import styled from "styled-components"

export const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img {
width: 300px;
height: 100%;
border-radius: 20px;
}

h3 {
    color: #ffffff;
    margin-top: 15px;
    font-size: 18px;
}
@media screen and (max-width: 1024px) {
    img {
      width: 200px;
      display: flex;
    }
    h3 {
        font-size: 12px;
        text-align: center;
    }
  }
`
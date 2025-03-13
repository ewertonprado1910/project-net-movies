import styled from "styled-components"

export const Container = styled.div `
display: flex;
gap: 10px;
margin-top: 20px;

img {
    width: 200px;
    border-radius: 20px;
}

p {
    font-size: 20px;
    font-weight: 700;
    margin-top: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 800px){
    p {
        font-size: 13px;
    }
    img {
       width: 100px;
       margin: 0 15px;
}
}
`
export const Title = styled.h2 `
font-size: 15px;
color: #fff;
`
import styled from "styled-components"


export const Background = styled.div`
background-image: url(${props => props.img});
width: 100vw;
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px 0;

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
}

@media screen and (max-width: 800px) {
    padding: 50px 20px;
}
`
export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 100%;
max-width: 1500px;
margin: 50px 0px;

@media screen and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`
export const Info = styled.div`
z-index: 2;
padding: 20px;
width: 50%;

h1 {
    font-size: 60px;
    font-weight: 700;
    color: #ffffff;
}
p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 30px;
}
@media screen and (max-width: 800px) {
    width: 80%; 
    
    h1 {
        font-size: 45px;
    }
    p {
        font-size: 18px;
    } 
}
`
export const Poster = styled.div`
 z-index: 2;
 
img {
    width: 300px;
    border-radius: 25px; 
} 
@media screen and (max-width: 800px){
    img {
        width: 200px;
    }
    
}  
`
export const ContainerButtons = styled.div`
display: flex;
gap: 20px;
margin-top: 30px;

@media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

`


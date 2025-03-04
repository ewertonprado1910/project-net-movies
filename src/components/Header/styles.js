import styled from "styled-components"

export const Container = styled.div`
z-index: 99;
position: fixed;
top: 0;
padding: 5px 50px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${(props) => props.changeBackground ? "#000" : "transparent"};
transition: background-color 0.5s ease-in-out;

img {
    width: 300px;
}
`
export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 30px;

`
export const Li = styled.li`
display: flex;
cursor: pointer;
position: relative;

a {
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
}

&::after {
    content: "";
    height: 2px;
    width: ${props => (props.isActive ? "100%" : 0)};
    background-color: #189b20;
    bottom: -10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
}

&:hover::after {
    width: 100%;
}
`
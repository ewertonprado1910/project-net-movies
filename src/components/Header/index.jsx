import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

import { Container, Menu, Li } from "./styles"
import ImageLogo from "../../assets/logo.png"


function Header() {
    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()

    window.onscroll = () => {
        if (!changeBackground && window.scrollY > 95) {
            setChangeBackground(true)
        } else {
            setChangeBackground(false)
        }
    }
    return (
        <>
            <Container changeBackground={changeBackground}>
                <img src={ImageLogo} alt="logo-dev-movies" />
                <Menu>
                    <Li isActive={pathname === "/"}>
                        <Link to="/">Home</Link>
                    </Li>
                    <Li isActive={pathname.includes("movies")}>
                        <Link to="/movies">Filmes</Link>
                    </Li>
                    <Li isActive={pathname.includes("series")}>
                        <Link to="/series">Séries</Link>
                    </Li>
                </Menu>
            </Container>
        </>
    )


}

export default Header


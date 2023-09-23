import Button from "../UI/Button"
import Logo from "./Logo"
import MainNav from "./MainNav"
import logo from '../Assets/logo.png'
import close from '../Assets/close.png'
import { useState } from "react"

const SliderNav = (props) => {
    return (
        <div className="slider-nav">
            <figure className="close-btn" onClick={props.closeSlider}>
                <img src={close} alt='close button' />
            </figure>

            <MainNav />
            <SideNav />
        </div>
    )
}

const SideNav = () => {
    return (
        <div className="side-nav">
            <Button title="log in" className="secondary-btn"/>
            <Button title="resgister" className="primary-btn"/>
        </div>
    )
}

const HamburgerMenu = (props) => {
    return (
        <div className="hamburger" onClick={props.openSlider}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}

const NavBar = () => {
    const [isSliderNavOpen, setSliderNavOpen] = useState(false)

    const toggleSliderNav = () => {
        setSliderNavOpen(!isSliderNavOpen)
    }
    
    return (
        <header>
            <div className="main-header-section"> 
                <Logo src={logo} />

                <MainNav />

                <SideNav />

                <HamburgerMenu openSlider={toggleSliderNav}/>

                {isSliderNavOpen && <SliderNav closeSlider={toggleSliderNav}/>}
            </div>
        </header>
    )
}

export default NavBar
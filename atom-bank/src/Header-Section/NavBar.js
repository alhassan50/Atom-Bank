import Button from "../UI/Button"
import Logo from "./Logo"
import MainNav from "./MainNav"

const NavBar = () => {
    return (
        <header>
            <div className="main-header-section"> 
                <Logo />

                <MainNav />

                <div className="side-nav">
                    <Button title="log in" className="secondary-btn"/>
                    <Button title="resgister" className="primary-btn"/>
                </div>
            </div>
        </header>
    )
}

export default NavBar
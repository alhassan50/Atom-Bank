import Button from "../UI/Button"
import Logo from "./Logo"
import MainNav from "./MainNav"
import logo from '../Assets/logo.png'

const NavBar = () => {
    return (
        <header>
            <div className="main-header-section"> 
                <Logo src={logo} />

                <MainNav />

                <div className="side-nav">
                    <Button title="log in" className="secondary-btn"/>
                    <Button title="resgister" className="primary-btn"/>
                </div>
            </div>

            <section>
                
            </section>
        </header>
    )
}

export default NavBar
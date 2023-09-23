import Logo from "../Header-Section/Logo"
import logo from "../Assets/logo2.png"
import SocialInfo from "./SocialInfo"

const ContactInfo = (props) => {
    return (
        <div className="footer-link-item">
            <h4>
                {props.headerText}
            </h4>

            <p>
                {props.bodyText}
            </p>
        </div>
    )
}

const SocialLinks = () => {
    return (
        <div className="social-links footer-link-item">
            {SocialInfo.map(social => {
                    return (
                        <div key={social.src} className="social-info">
                            <img src={`./Assets/${social.src}`} alt={`${social.src} icon`}/>
                            <p>{social.id}</p>
                        </div>
                    )
            })}
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-links">
                    <Logo src={logo} />

                    <ContactInfo 
                        headerText="location" 
                        bodyText="Lorem ipsum dolor sit amet."
                    />

                    <ContactInfo 
                        headerText="contact" 
                        bodyText="Costumer Service 0812 - 1234 -5678"
                    />
                    
                    <SocialLinks />
                </div>
                
                <div className="footer-copyright">
                    <hr />
                    <div className="copyright-body">
                        <small>Alhassan@2023</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

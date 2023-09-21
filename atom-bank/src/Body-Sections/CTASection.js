import Button from "../UI/Button"
import TextBox from "../UI/TextBox"

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="section-header">
                <h3>
                    subscribe newsletter
                </h3>

                <p>
                    Financial transactions remotely using mobile
                </p>
            </div>

            <div className="section-body">
                <div className="section-body-content">
                    <TextBox title="email" id="email" label="Enter your email"/> 
                    <Button className="primary-btn" title="Get Started"/>
                </div>
            </div>
        </section>
    )
}

export default CTASection
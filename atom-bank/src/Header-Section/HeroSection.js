import laptop from '../Assets/laptop.png'
import mobile from '../Assets/mobile.png'
import Button from '../UI/Button'
import arrow from '../Assets/arrow.png'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-header">
                    <h1>
                        Easy Way to Save your Money with <div className='atombank'><span className='atom'>Atom</span>Bank.</div>
                    </h1>

                    <p>
                        The best place to transact and save money.We make all payments easier and simplier. Receive and send payment funds without cash.
                    </p>

                    <div className='hero-btns'>
                        <Button title="download now" className="primary-btn"/>
                        <Button title="see how it works" className="ghost-btn" image={arrow}/>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="main-image">
                        <img src={laptop} alt='atombank app on laptop'/>
                    </div>

                    <div className="secondary-image">
                        <img src={mobile} alt='atombank app on mobile'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
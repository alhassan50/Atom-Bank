import arrow from '../Assets/arrow.png'
import Button from '../UI/Button'

const servicesList = [
    {
        "image": 'service1.png',
        "heading": 'Bank App for Your Easy',
        "hasAtomBank": true,
        "description": `The best place to transact and save money. More organized finances
        no longer a discourse. Enjoy the life you want, without wasting time on unnecessary financial matters`,
        "download": {
            'android': 'googleplay.png',
            'ios': 'appstore.png'
        },
        'ctaBtn': null
    },

    {
        "image": 'service2.png',
        "heading": 'Bank for the Future',
        "hasAtomBank": true,
        "description": `All conveniences are at hand. It's time to go ahead and make dreams come true one by one. Open, manage and withdraw competitive interest savings without going to the bank.`,
        "download": null,
        'ctaBtn': {
            'title':"learn more",
            'className':"ghost-btn",
        }
    },

    {
        "image": 'service3.png',
        "heading": 'Costumable Debit Card',
        "description": `Choose a debit card design that suits you. Practically withdraw cash and transact worldwide.`,
        "download": null,
        'ctaBtn': {
            'title':"learn more",
            'className':"ghost-btn",
        }
    }
]

const renderAtomBank = (hasAtomBank) => {
    const jsxText = hasAtomBank ? <span className='atom'>Atom</span> : ''
    return (
        jsxText
    )
}

const ServicesCard = () => {
    return (
        <div className='services-cards-container'>
            {
                servicesList.map((service, index) => {
                    return (
                        <div 
                            key={service.heading} 
                            className={`service-card ${index % 2 ===  0 ? 'not=reverse' : 'reverse'}`}>
                                
                                <div className='card-image'>
                                    <img src={`../Assets/${service.image}`} alt={service.heading}/>
                                </div>

                                <div className='card-description'>
                                    <h3>
                                        {renderAtomBank(service.hasAtomBank)}
                                        {service.heading}
                                    </h3>

                                    <p>
                                        {service.description}
                                    </p>

                                    {service.ctaBtn && 
                                        <div className='ghost-btn-container'>
                                            <Button title={service.ctaBtn.title} className={service.ctaBtn.className} image={arrow}/>
                                        </div>
                                    }
                                    
                                    {service.download && 
                                        <div className='download-btns'>
                                            <figure className='download-gplay'>
                                                <img src={`../Assets/${service.download.android}`} alt={service.download.android} />
                                            </figure>
                                            <figure className='download-appstore'>
                                                <img src={`../Assets/${service.download.ios}`} alt={service.download.ios}/>
                                            </figure>
                                        </div>
                                    }
                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const ServicesSection = () => {
    return (
        <section>
            <div className="section-body">
                <div className="section-body-content">
                    <ServicesCard />
                </div>
            </div>
        </section>
    )
}

export default ServicesSection

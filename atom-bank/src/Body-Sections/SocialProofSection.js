const socialProofItems = [
    {
        image: 'security.png',
        header: 'Fast and secure cashless payments',
        decsription: 'Pay with AtomBank app, online, and in stores, and get added speed security',
        id: 82718
    },
    {
        image: 'account.png',
        header: 'Control over your account',
        decsription: 'Pay with AtomBank app, online, and in stores, and get added speed security',
        id: 92648
    }
]

const SocialProofCard = () => {
    return (
        <div className="cards-container">
            {socialProofItems.map(items => {
                return (
                    <div className="cards" key={items.id}>
                        <div className="card-image">
                            <img src={`../Assets/${items.image}`}  alt={items.header}/>
                        </div>
                        <div className="card-info">
                            <h3>
                                {items.header}
                            </h3>
                            <p>
                                {items.decsription}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const SocialProofSection = () => {
    return (
        <section className="social-proof-section">
            <div className="section-body">
                <div className="section-body-content">
                    <SocialProofCard />
                </div>
            </div>
        </section>
    )
}

export default SocialProofSection

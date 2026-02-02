import React from 'react';

const ContactCTA = () => {
    return (
        <section className="contact-cta-section section-padding">
            <div className="container">
                <div className="contact-cta-box">
                    <div className="contact-cta-content">
                        <h2 className="contact-cta-title">Transforming Ideas Into Reality</h2>
                        <p className="contact-cta-desc">Contact me today to discuss your project and bring it to life.</p>
                        <div className="contact-cta-btns">
                            <a href="#contact" className="btn-primary-rect">Hire Me</a>
                            <a href="#about" className="btn-secondary-rect">About me</a>
                        </div>
                    </div>
                    <div className="contact-cta-image">
                        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80" alt="Work Setup" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;

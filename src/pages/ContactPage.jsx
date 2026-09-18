import React from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle } from 'lucide-react';

const ContactPage = () => {
    const faqs = [
        { q: "What is your typical turnaround time?", a: "Most projects take 2-4 weeks depending on complexity." },
        { q: "Do you offer post-launch support?", a: "Yes, I provide 3 months of free maintenance for all projects." },
        { q: "Which technologies do you specialize in?", a: "React, Node.js, GSAP, and Tailwind CSS are my core stack." }
    ];

    return (
        <div className="contact-page pt-20 section-pattern">
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <div className="container section-padding">
                <div className="section-header">
                    <h2 className="section-title">Get In <span className="text-accent">Touch</span></h2>
                    <p className="section-subtitle">Let's Discuss Your Next Innovative Project. I'm always open to new opportunities.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info-cards">
                        <div className="contact-info-card gsap-reveal">
                            <div className="card-icon-round">
                                <Mail className="text-accent" size={24} />
                            </div>
                            <div>
                                <h4>Email Me</h4>
                                <p>jyotishrestha097@gmail.com</p>
                            </div>
                        </div>
                
                        <div className="contact-info-card gsap-reveal">
                            <div className="card-icon-round">
                                <MapPin className="text-accent" size={24} />
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form gsap-reveal glass-effect" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>


                <div className="contact-extra section-padding gsap-reveal">
                    <div className="section-header">
                        <h3 className="section-title">Frequently Asked <span className="text-accent">Questions</span></h3>
                    </div>
                    <div className="faq-grid">
                        {faqs.map((faq, i) => (
                            <div key={i} className="faq-item glass-effect">
                                <HelpCircle className="text-accent" size={24} />
                                <div>
                                    <h4>{faq.q}</h4>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

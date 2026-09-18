import React, { useState } from 'react';
import { Mail, MapPin, Send, HelpCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setStatusMessage('');

        try {
            const response = await fetch('https://formsubmit.co/ajax/jyotishrestha097@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _subject: `New Portfolio Contact Message from ${formData.name}`,
                    _captcha: 'false',
                    _template: 'table'
                })
            });

            const result = await response.json();

            if (response.ok || result.success === 'true') {
                setStatus('success');
                setStatusMessage('Thank you! Your message has been sent successfully. I will get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error(result.message || 'Form submission failed');
            }
        } catch (error) {
            console.error('Contact Form Error:', error);
            setStatus('error');
            setStatusMessage('Unable to send message automatically. Please click email link directly to contact me at jyotishrestha097@gmail.com');
        }
    };

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
                    <p className="section-subtitle">Let's Discuss Your Next Innovative Project. Send me a direct message below.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info-cards">
                        <div className="contact-info-card gsap-reveal">
                            <div className="card-icon-round">
                                <Mail className="text-accent" size={24} />
                            </div>
                            <div>
                                <h4>Email Me</h4>
                                <a href="mailto:jyotishrestha097@gmail.com" className="text-accent" style={{ fontWeight: 600 }}>
                                    jyotishrestha097@gmail.com
                                </a>
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

                    <form className="contact-form gsap-reveal glass-effect" onSubmit={handleSubmit}>
                        {status === 'success' && (
                            <div className="form-status-alert success">
                                <CheckCircle2 size={20} />
                                <span>{statusMessage}</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="form-status-alert error">
                                <AlertCircle size={20} />
                                <span>{statusMessage}</span>
                            </div>
                        )}

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? (
                                <>
                                    Sending... <Loader2 size={18} className="animate-spin" />
                                </>
                            ) : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
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

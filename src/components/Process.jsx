import React from 'react';
import { ClipboardList, Palette, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <ClipboardList size={32} />,
            title: "Conceptualization and Planning",
            desc: "I follow a streamlined development process to ensure precision and efficiency. From initial concept to deployment strategy, I work closely with client goals to exceed expectations."
        },
        {
            icon: <Palette size={32} />,
            title: "Design and Development",
            desc: "I craft user-centered web and app solutions, prioritizing usability, accessibility, and high-end aesthetics to deliver an exceptional and memorable user experience."
        },
        {
            icon: <Rocket size={32} />,
            title: "Testing and Quality Assurance",
            desc: "To ensure reliability and stability, I conduct rigorous testing across devices to identify and resolve any issues, ensuring a seamless and high-performing final product."
        }
    ];


    return (
        <section className="process-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">From Concept to Deployment My <span className="text-accent">Seamless Development Process</span></h2>
                    <p className="section-subtitle">I systematically bring your ideas to life through planning, design, development, testing, and deployment. With my expertise, I ensure successful project delivery.</p>
                </div>


                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="process-card">
                            <div className="process-icon-box">
                                {step.icon}
                            </div>
                            <h3 className="process-card-title">{step.title}</h3>
                            <p className="process-card-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

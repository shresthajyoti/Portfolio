import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import {
    Smartphone,
    Globe,
    Code2,
    Server,
    Layout,
    ArrowRight
} from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import cssLogo from '../assets/css-logo.png';

const Skills = () => {
    // Tech Stack with logos from SimpleIcons CDN for better visual fidelity
    const techStack = [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', color: '#3178C6' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000', color: '#000000' },
        { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', color: '#4169E1' },
        { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', color: '#47A248' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', color: '#2496ED' },
        { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/232F3E', color: '#232F3E' },
        { name: 'Express', icon: 'https://cdn.simpleicons.org/express/000000', color: '#000000' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717', color: '#181717' },
    ];




    const bentoRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".bento-card-mock", {
                scrollTrigger: {
                    trigger: bentoRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, bentoRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" className="skills-section section-padding bg-white">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Building Innovative <span className="text-accent">Web Solutions</span></h2>
                    <p className="section-subtitle">Experienced In Desktop and Web App Development</p>
                </div>

                <div className="skills-bento-grid-mock" ref={bentoRef}>
                    {/* Skills and Expertise */}
                    <div className="bento-card-mock main-expertise">
                        <div className="card-icon-round">
                            <Code2 size={24} className="text-accent" />
                        </div>
                        <span className="card-tag-orange">Creative Solutions</span>
                        <h3 className="card-title-mock">Skills and Expertise</h3>
                        <p className="card-text-small">Proficient in Various Programming Languages, Frameworks, and Tools.</p>

                        <div className="tech-pills-container">
                            {techStack.map((tech, i) => (
                                <div key={i} className="tech-pill-logo">
                                    <div className="tech-logo-wrapper">
                                        <img src={tech.icon} alt={tech.name} className="tech-logo-img" />
                                    </div>
                                    <span className="tech-pill-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Responsive Web Design */}
                    <div className="bento-card-mock responsive-web">
                        <div className="card-content-side">
                            <span className="card-tag-orange">Innovative Solutions</span>
                            <h3 className="card-title-mock">Responsive Web Design</h3>
                            <p className="card-text-small">Creating Engaging and Mobile-Friendly Websites.</p>
                        </div>
                        <div className="card-visual">
                            <Layout size={80} className="visual-icon-grey" strokeWidth={1} />
                        </div>
                    </div>

                    {/* High-Quality Web Development */}
                    <div className="bento-card-mock high-quality">
                        <div className="card-content-full">
                            <span className="card-tag-orange">Creative Solutions</span>
                            <h3 className="card-title-mock">High-Quality Web Development</h3>
                            <p className="card-text-small">Delivering Customized Web Solutions To Meet Your Needs.</p>
                        </div>
                        <div className="card-visual-bottom">
                            <div className="window-frame-mock">
                                <div className="window-dots"><span></span><span></span><span></span></div>
                                <div className="window-at-icon">@</div>
                            </div>
                        </div>
                    </div>

                    {/* Web Development Services */}
                    <div className="bento-card-mock mini-service">
                        <div className="card-icon-round">
                            <Server size={20} className="text-accent" />
                        </div>
                        <h3 className="card-title-mini">Web Development Services</h3>
                        <p className="card-text-mini">Customized Solutions For Your Business</p>
                        <a href="#contact" className="card-link-orange">Contact <ArrowRight size={14} /></a>
                    </div>

                    {/* Mobile App Development */}
                    <div className="bento-card-mock mini-service">
                        <div className="card-icon-round">
                            <Smartphone size={20} className="text-accent" />
                        </div>
                        <h3 className="card-title-mini">Mobile App Development</h3>
                        <p className="card-text-mini">Creating User-Friendly Mobile Applications</p>
                        <a href="#contact" className="card-link-orange">Contact <ArrowRight size={14} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

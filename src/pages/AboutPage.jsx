import React, { useLayoutEffect, useRef } from 'react';
import { 
    User, Code, Cpu, Briefcase, Award, GraduationCap, Zap, Shield, Target, 
    MapPin, Mail, Github, Layers, Rocket
} from 'lucide-react';
import Skills from '../components/Skills';
import gsap from 'gsap';

const AboutPage = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Profile card & headline entrance animations
            gsap.from(".about-profile-card", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".about-headline-box", {
                y: 20,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out"
            });

            // Feature items stagger
            gsap.from(".feature-item", {
                scrollTrigger: {
                    trigger: ".about-features-grid",
                    start: "top 85%",
                },
                opacity: 0,
                x: -20,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });

            // Highlights grid stagger
            gsap.from(".highlight-card", {
                scrollTrigger: {
                    trigger: ".about-highlights-section",
                    start: "top 85%",
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out"
            });

            // Timeline line animation
            gsap.fromTo(".timeline-progress",
                { height: 0 },
                {
                    scrollTrigger: {
                        trigger: ".timeline",
                        start: "top 70%",
                        end: "bottom 70%",
                        scrub: true
                    },
                    height: "100%",
                    ease: "none"
                }
            );

            // Timeline items reveal
            const timelineItems = document.querySelectorAll(".timeline-item");
            timelineItems.forEach((item) => {
                gsap.from(item.querySelector(".timeline-icon-box"), {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    },
                    scale: 0,
                    rotation: -45,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                });

                gsap.from(item.querySelector(".timeline-content"), {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    },
                    opacity: 0,
                    x: 30,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power3.out"
                });
            });

            // Blob animations
            gsap.to(".blob-1", {
                x: 50,
                y: 30,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
            gsap.to(".blob-2", {
                x: -40,
                y: -50,
                duration: 7,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="about-page pt-20 section-pattern" ref={mainRef}>
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <div className="container section-padding">
                <div className="section-header">
                    <h2 className="section-title">About <span className="text-accent">Me</span></h2>
                    <p className="section-subtitle">Architecting High-Performance Digital Solutions with a Vision for the Future</p>
                </div>

                <div className="about-content-grid">
                    {/* Left Column: Personal Developer Profile Card */}
                    <div className="about-profile-card glass-effect">
                        <div className="profile-header-badge">
                            <div className="avatar-icon-box">
                                <User size={40} className="text-accent" />
                            </div>
                            <div className="status-online-tag">
                                <span className="status-dot"></span> Available for Hire
                            </div>
                        </div>

                        <div className="profile-details">
                            <h3 className="profile-name">Jyoti Shrestha</h3>
                            <p className="profile-role">Full-Stack Developer</p>
                            
                            <div className="profile-meta-list">
                                <div className="meta-item">
                                    <MapPin size={18} className="text-accent" />
                                    <span>Kathmandu, Nepal</span>
                                </div>
                                <div className="meta-item">
                                    <Mail size={18} className="text-accent" />
                                    <a href="mailto:jyotishrestha097@gmail.com">jyotishrestha097@gmail.com</a>
                                </div>
                                <div className="meta-item">
                                    <Github size={18} className="text-accent" />
                                    <a href="https://github.com/shresthajyoti" target="_blank" rel="noopener noreferrer">github.com/shresthajyoti</a>
                                </div>
                            </div>

                            <div className="profile-stats-grid">
                                <div className="profile-stat-box">
                                    <h4>2+</h4>
                                    <p>Years Experience</p>
                                </div>
                                <div className="profile-stat-box">
                                    <h4>15+</h4>
                                    <p>Projects Built</p>
                                </div>
                                <div className="profile-stat-box">
                                    <h4>100%</h4>
                                    <p>Clean Code</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Narrative & Core Focus */}
                    <div className="about-text-side about-headline-box">
                        <h3 className="about-headline">
                            Turning Complex Challenges into <span className="text-accent">Elegant Realities</span>
                        </h3>
                        
                        <p className="about-description">
                            Hello! I am <strong>Jyoti Shrestha</strong>, a Full-Stack Developer specializing in high-performance web applications, dynamic user interfaces, and scalable software solutions. Driven by a passion for technical precision and user-centered design, I build applications that are as efficient under the hood as they are engaging to interact with.
                        </p>
                        
                        <p className="about-description">
                            With over 2 years of practical software engineering experience, my work spans reactive frontend architectures, responsive mobile-friendly layouts, and solid application logic. I focus on translating project requirements into clean, maintainable, and high-impact code.
                        </p>

                        <div className="about-features-grid">
                            <div className="feature-item">
                                <Zap className="text-accent" size={24} />
                                <div>
                                    <h4>Agile Innovation</h4>
                                    <p>Rapid prototyping with focus on stability and high performance.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Shield className="text-accent" size={24} />
                                <div>
                                    <h4>Robust Architecture</h4>
                                    <p>Building secure, scalable, and modular component structures.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Target className="text-accent" size={24} />
                                <div>
                                    <h4>Precision Engineering</h4>
                                    <p>Delivering sound mathematical logic and optimized algorithms.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Cpu className="text-accent" size={24} />
                                <div>
                                    <h4>Modern Stack</h4>
                                    <p>Leveraging React, JavaScript, ES6+, and cutting-edge web tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Highlights Section */}
                <div className="about-highlights-section mt-16">
                    <div className="highlights-grid">
                        <div className="highlight-card glass-effect">
                            <div className="highlight-icon">
                                <Code size={28} className="text-accent" />
                            </div>
                            <h4>Frontend Mastery</h4>
                            <p>Crafting pixel-perfect responsive layouts, smooth GSAP transitions, and intuitive user interfaces with React and CSS.</p>
                        </div>

                        <div className="highlight-card glass-effect">
                            <div className="highlight-icon">
                                <Layers size={28} className="text-accent" />
                            </div>
                            <h4>Full-Stack Capabilities</h4>
                            <p>Connecting client-side logic with backend services, asynchronous APIs, and real-time state management systems.</p>
                        </div>

                        <div className="highlight-card glass-effect">
                            <div className="highlight-icon">
                                <Rocket size={28} className="text-accent" />
                            </div>
                            <h4>Performance & Speed</h4>
                            <p>Optimizing asset delivery, bundle sizes, render cycles, and code splitting for maximum web performance.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-secondary section-pattern pt-20">
                <div className="bg-blob blob-3"></div>
                <Skills />
            </div>

            <div className="journey-section section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Professional <span className="text-accent">Timeline</span></h2>
                        <p className="section-subtitle">A trace of my technical evolution and journey as a developer</p>
                    </div>

                    <div className="timeline">
                        <div className="timeline-progress"></div>
                        
                        <div className="timeline-item">
                            <div className="timeline-icon-box">
                                <Briefcase size={20} />
                            </div>
                            <div className="timeline-content">
                                <span>2024 - Present</span>
                                <h4>Full-Stack Developer</h4>
                                <p>Building modern web applications, desktop solutions, and custom client platforms with React, JavaScript, and custom backend APIs.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon-box">
                                <Award size={20} />
                            </div>
                            <div className="timeline-content">
                                <span>2022 - 2024</span>
                                <h4>Web Application Engineer</h4>
                                <p>Developed interactive web platforms, optimized UI responsiveness, integrated payment and form endpoints, and implemented responsive design systems.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon-box">
                                <GraduationCap size={20} />
                            </div>
                            <div className="timeline-content">
                                <span>2020 - 2022</span>
                                <h4>Computer Science & Software Foundations</h4>
                                <p>Mastered core programming paradigms, algorithm design, database structures, and web technologies in Nepal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;



import React, { useLayoutEffect, useRef } from 'react';
import { User, Code, Heart, Coffee, Globe, Cpu, Briefcase, Award, GraduationCap, Zap, Shield, Target } from 'lucide-react';
import Skills from '../components/Skills';
import gsap from 'gsap';

const AboutPage = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero section animations
            gsap.from(".about-img", {
                scale: 1.1,
                duration: 1.5,
                ease: "power2.out"
            });

            gsap.to(".experience-badge", {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
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
            timelineItems.forEach((item, index) => {
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
                    <div className="about-image-side">
                        <div className="about-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Profile" className="about-img" />
                            <div className="experience-badge">
                                <h3>5+</h3>
                                <p>Years of Engineering</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-text-side">
                        <h3 className="about-headline">Turning Complex Challenges into <span className="text-accent">Elegant Realities</span></h3>
                        <p className="about-description">
                            I am a Senior Full-Stack Engineer specializing in scalable React ecosystems and high-performance backend architectures. My journey is defined by a relentless pursuit of technical excellence and a deep-seated passion for user-centric design.
                        </p>
                        <p className="about-description">
                            Beyond code, I focus on the strategic intersection of business goals and engineering possibilities, ensuring every deployment delivers measurable impact and a premium, state-of-the-art experience.
                        </p>

                        <div className="about-features-grid">
                            <div className="feature-item">
                                <Zap className="text-accent" size={24} />
                                <div>
                                    <h4>Agile Innovation</h4>
                                    <p>Rapid prototyping with a focus on stability.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Shield className="text-accent" size={24} />
                                <div>
                                    <h4>Robust Security</h4>
                                    <p>Securing data integrity at every architectural layer.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Target className="text-accent" size={24} />
                                <div>
                                    <h4>Precision Logic</h4>
                                    <p>Delivering mathematically sound and optimized code.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Cpu className="text-accent" size={24} />
                                <div>
                                    <h4>Edge Computing</h4>
                                    <p>Optimizing for the next generation of web apps.</p>
                                </div>
                            </div>
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
                        <p className="section-subtitle">A trace of my technical evolution and leadership roles</p>
                    </div>

                    <div className="timeline">
                        <div className="timeline-progress"></div>
                        <div className="timeline-item">
                            <div className="timeline-icon-box">
                                <Briefcase size={20} />
                            </div>
                            <div className="timeline-content">
                                <span>2022 - Present</span>
                                <h4>Lead Full Stack Engineer</h4>
                                <p>Architecting enterprise-level SaaS components, mentoring teams, and implementing cutting-edge CI/CD pipelines for global deployments.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon-box">
                                <Award size={20} />
                            </div>
                            <div className="timeline-content">
                                <span>2020 - 2022</span>
                                <h4>Senior Systems Architect</h4>
                                <p>Spearheaded the migration to microservices, reducing server latency by 60% and establishing modern design systems.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon-box">
                                <GraduationCap size={20} />
                            </div>
                            <div className="timeline-content">
                                <span>2018 - 2020</span>
                                <h4>Software Engineer</h4>
                                <p>Developed immersive interactive dashboards and fintech solutions, prioritizing high-security standards and data visualization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;


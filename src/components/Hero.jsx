import React, { useLayoutEffect, useRef } from 'react';
import profileImg from '../assets/profile.jpg';
import gsap from 'gsap';
import { ArrowRight, User } from 'lucide-react';

const Sunburst = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="12" fill="currentColor" />
        {[...Array(16)].map((_, i) => (
            <line
                key={i}
                x1="50"
                y1="50"
                x2="50"
                y2="10"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                transform={`rotate(${i * 22.5} 50 50)`}
            />
        ))}
    </svg>
);

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });

            tl.from(".profile-wrapper", {
                scale: 0,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)"
            })
                .from(".greeting-dribbble", {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.4")
                .from(".hero-line span", {
                    y: 100,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power4.out"
                }, "-=0.4")
                .from(".hero-description-dribbble", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6")
                .from(".hero-cta-dribbble", {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                }, "-=0.4");

            gsap.from(".sunburst", {
                rotation: -45,
                opacity: 0,
                scale: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "back.out(1.7)",
                delay: 0.5
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="home" className="hero-section hero-dribbble" ref={heroRef}>
            <div className="grain-overlay"></div>

            {/* Decorative Elements */}
            <Sunburst className="sunburst sunburst-top-right text-accent" />
            <Sunburst className="sunburst sunburst-bottom-left text-accent" />

            <div className="hero-content-dribbble" ref={contentRef}>
                <div className="profile-wrapper">
                    <div className="profile-circle-bordered">
                        <img src={profileImg} alt="Jyoti Shrestha" />
                    </div>
                </div>

                <span className="greeting-dribbble">
                    👋 Hi, I'm Jyoti Shrestha
                </span>

                <h1 className="hero-title-dribbble">
                    <div className="hero-line">
                        <span>Passionate <span className="title-box">Full-Stack 🌼</span> Developer</span>
                    </div>
                    <div className="hero-line">
                        <span><span className="title-box">Creating Innovative</span> Web Solutions</span>
                    </div>
                </h1>

                <p className="hero-description-dribbble">
                    2 years of practical experience high-performance web applications
                    <br />
                    and desktop solutions, I bring expertise and creativity to every project.
                </p>

                <div className="hero-cta-dribbble mt-6 flex justify-center">
                    <a href="#work" className="btn-explore-dribbble">
                        Explore Portfolio <div className="arrow-circle"><ArrowRight size={18} /></div>
                    </a>
                </div>
            </div>

            {/* Arches Background */}
            <div className="arches-bg">
                <div className="arch"></div>
                <div className="arch"></div>
                <div className="arch"></div>
            </div>

            {/* Dynamic Marquee */}
            <div className="scrolling-banner mt-16">
                <div className="marquee">
                    <span><i className="marquee-star">✴</i> Full Stack Developer</span>
                    <span><i className="marquee-star">✴</i> Web Development</span>
                    <span><i className="marquee-star">✴</i> UI/UX Design</span>
                    <span><i className="marquee-star">✴</i> Full Stack Developer</span>
                    <span><i className="marquee-star">✴</i> Web Development</span>
                    <span><i className="marquee-star">✴</i> Full Stack Developer</span>
                    <span><i className="marquee-star">✴</i> UI/UX Design</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import hotelBookingImg from '../assets/hotel-booking.png';
import ecommerceImg from '../assets/ecommerce.png';
import ideogramCloneImg from '../assets/ideogram-clone.png';
import brandIdentityImg from '../assets/brand-identity.png';
import mobileUxImg from '../assets/mobile-ux.png';
import webUiUxImg from '../assets/web-ui-ux.png';

const PROJECTS_DATA = [
    {
        title: 'Modern Hotel Booking',
        category: 'Web App',
        tags: [{ text: 'Full Stack', type: 'dev' }, { text: 'React & Node', type: 'app' }],
        desc: 'A premium hotel reservation system featuring real-time room availability, secure payment gateways, and a sophisticated admin dashboard.',
        image: hotelBookingImg,
        icon: '🏨',
        link: 'https://github.com/shresthajyoti/Hotel-Booking'
    },
    {
        title: 'Premium E-commerce',
        category: 'Web App',
        tags: [{ text: 'E-commerce', type: 'dev' }, { text: 'Next.js', type: 'app' }],
        desc: 'A high-end retail experience with ultra-fast search, dynamic inventory management, and a seamless checkout flow optimized for conversions.',
        image: ecommerceImg,
        icon: '🛍️',
        link: 'https://github.com/shresthajyoti'
    },
    {
        title: 'Netflix Pro Clone',
        category: 'Web App',
        tags: [{ text: 'React & Redux', type: 'dev' }, { text: 'Firebase', type: 'app' }],
        desc: 'A sophisticated streaming platform clone featuring user authentication, movie categories, and a professional video player interface.',
        image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop',
        icon: '🎬',
        link: 'https://github.com/shresthajyoti'
    },
    {
        title: 'Visionary AI Clone',
        category: 'Design',
        tags: [{ text: 'AI / ML', type: 'dev' }, { text: 'GenAI', type: 'app' }],
        desc: 'A high-fidelity clone of the Ideogram AI art platform, enabling users to generate high-quality images from text prompts with professional typography.',
        image: ideogramCloneImg,
        icon: '🎨',
        link: 'https://github.com/shresthajyoti'
    },
    {
        title: 'Nebula Brand System',
        category: 'Design',
        tags: [{ text: 'Branding', type: 'dev' }, { text: 'Corporate', type: 'app' }],
        desc: 'Complete visual identity system for a futuristic tech startup, including logo architecture, color theory, and premium marketing collateral.',
        image: brandIdentityImg,
        icon: '🎨',
        link: 'https://github.com/shresthajyoti'
    }
];

const Projects = ({ limit, category = 'All' }) => {
    let filteredProjects = category === 'All'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.category === category);

    if (limit) {
        filteredProjects = filteredProjects.slice(0, limit);
    }

    const gridRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".project-card");
            cards.forEach((card, i) => {
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 40
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 92%",
                            toggleActions: "play none none none"
                        },
                        delay: i * 0.1 // Keeping a small stagger but individual triggers
                    }
                );
            });
        }, gridRef);

        // Refresh scrolltrigger after images load
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => ctx.revert();
    }, [category]);


    return (
        <section id="work" className="projects-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My <span className="text-highlight">Development Work</span></h2>
                    <p className="section-subtitle">Diverse Range of Projects From Desktop to Web Applications</p>
                </div>

                <div className="projects-grid" ref={gridRef}>
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-card-image" />
                                <div className="project-image-overlay">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className={`project-tag tag-${tag.type}`}>
                                                {tag.text}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="project-card-content">
                                <div className="project-card-header-flex">
                                    <div className="project-icon-circle">
                                        <span className="logo-emoji">{project.icon}</span>
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                </div>

                                <p className="project-desc">{project.desc}</p>

                                <div className="project-card-footer">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn-rect">
                                        View Project <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Decorative Shape in bottom right */}
                            <div className="card-decorative-blob"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;

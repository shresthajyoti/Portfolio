import React, { useLayoutEffect, useRef } from 'react';
import profileImg from '../assets/profile.jpg';
import gsap from 'gsap';

const Stats = () => {
    const stats = [
        { label: 'Projects completed', value: '75+' },
        { label: 'Satisfied Clients', value: '95%' },
        { label: 'Years of Experience', value: '5+' },
        { label: '5-star reviews', value: '200+' },
    ];


    const statsRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".stat-item", {
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.from(".stats-image-box", {
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                scale: 0.9,
                duration: 1,
                ease: "power2.out"
            });
        }, statsRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="stats-section section-padding" ref={statsRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Track <span className="text-accent">Record of Success</span></h2>
                    <p className="section-subtitle">Presenting Impressive Stats for my Successful Projects and Satisfied Clients</p>
                </div>

                <div className="stats-dashed-box">
                    <div className="stats-grid-split">
                        <div className="metrics-grid-2x2">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <h3 className="stat-value">{stat.value}</h3>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="stats-image-container">
                            <div className="stats-image-box">
                                <img src={profileImg} alt="Developer" className="stats-photo" />
                                <div className="stats-photo-bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;

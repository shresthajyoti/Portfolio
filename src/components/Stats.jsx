import React, { useLayoutEffect, useRef } from 'react';
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
                y: 20,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
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
                    <div className="metrics-grid-4col">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;

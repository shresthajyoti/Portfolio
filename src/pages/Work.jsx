import React, { useState } from 'react';
import Projects from '../components/Projects';
import Process from '../components/Process';

const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Web App', 'Mobile', 'Design'];

    return (
        <div className="work-page pt-20 section-pattern">
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <div className="container section-padding">
                <div className="section-header">
                    <h2 className="section-title">My Recent <span className="text-accent">Projects</span></h2>
                    <p className="section-subtitle">A collection of digital experiences I've crafted recently. Each project is a testament to my commitment to quality and innovation.</p>
                </div>

                <div className="work-filters gsap-reveal">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <Projects category={selectedCategory} />
            </div>

            <div className="gsap-reveal bg-secondary section-pattern">
                <div className="bg-blob blob-3"></div>
                <Process />
            </div>
        </div>
    );
};


export default Work;

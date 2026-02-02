import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Process from '../components/Process';
import ContactCTA from '../components/ContactCTA';


const Home = () => {
    return (
        <div className="landing-page">

            <Hero />

            <div className="gsap-reveal">
                <Stats />
            </div>

            <Projects limit={3} />


            <div className="gsap-reveal">
                <Skills />
            </div>

            <div className="gsap-reveal">
                <Process />
            </div>

            <div className="gsap-reveal">
                <ContactCTA />
            </div>
        </div>
    );
};

export default Home;

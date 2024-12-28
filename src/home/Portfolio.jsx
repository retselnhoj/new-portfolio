import React, { useEffect } from 'react';
import Portfolio1 from '../assets/porfolio/portfolio-1.png';
import Portfolio2 from '../assets/porfolio/portfolio-2.png';
import Portfolio3 from '../assets/porfolio/portfolio-3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
        AOS.refresh();
    }, []);

    const portfolioItems = [
        {
            img: Portfolio1,
            link: 'https://bookmona.netlify.app/',
            alt: 'Bookmona Homepage'
        },
        {
            img: Portfolio2,
            link: 'https://master--quickfinder-project2.netlify.app/',
            alt: 'QuickFinder Project'
        },
        {
            img: Portfolio3,
            link: 'https://fresh-baskets.netlify.app/',
            alt: 'Fresh Baskets'
        }
    ];

    return (
        <section id="portfolio" className="max-w-screen-xl mx-auto py-16 px-6">
            <h3
                data-aos="fade-up"
                className="text-2xl text-gray-400"
            >
                PORTFOLIO
            </h3>
            <h2
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-8"
            >
                My Recent Work
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="zoom-in"
                        data-aos-delay={`${index * 200}`}
                        className="relative group rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src={item.img}
                            alt={item.alt}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <p className="text-white font-bold text-lg">View Project</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;

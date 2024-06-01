import React, { useRef } from 'react'
import './Portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Real Estate",
        img: "/img/portfolio1.png",
        desc: "A Real Estate Website Created using MERN for minor project, where you can buy, sell, and rent properties. Using Firebase for google authentication making it easier for users to sign in or create an account.",
        link: "https://ghar-dekho.netlify.app/"
    },
    {
        id: 2,
        title: "Tours and Travel",
        img: "/img/portfolio2.png",
        desc: "A tour and travel website using which users can book tour packages in India both domestic and international packages. Created During Summer Internship at Ardent Computech Pvt Ltd.",
        link: "https://wanderlust-wonders.netlify.app/"
    },
    {
        id: 3,
        title: "Food Ordering ",
        img: "/img/portfolio3.png",
        desc: "A Food Ordering Website Created using MERN for major project, where you can order food and advertise your restaurant. Using Firebase for google authentication making it easier for users to sign in or create an account, MUI along with Bootstrap is used for creating the UI.",
        link: "https://foodzie.freewebhostmost.com/"
    },
    {
        id: 4,
        title: "Music App",
        img: "img/portfolio4.png",
        desc: "Music App Created using basic HTML CSS JS.  Allows to seamlessly play songs across devices, whether on desktop, tablet, or smartphone. Intuitive controls for play, pause, skip, and volume adjustment.",
        link: "https://zentune.freewebhostmost.com/"
    },
];

// TODO:USING THIS ARRAY WE CAN CREATE DIFFERENT SECTIONS
const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="item" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => window.open(item.link, "_blank")}>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,

        // !offset HERE WILL BE DIFFERENT SINCE THE PROGRESS BAR WILL BE 100% AT THE BEGINING AND NOT 0%
        offset: ["end end", "start start"],
    })

    // ?CREATES A TRANSITION TYPE IS SPRING
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar"
                    style={{ scaleX }}></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}

        </div>
    );
};

export default Portfolio;

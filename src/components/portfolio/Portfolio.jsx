import React, { useRef } from 'react'
import './Portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Portfolio 1",
        img: "https://images.pexels.com/photos/7566369/pexels-photo-7566369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestiae quos commodi in veritatis, expedita vitae maxime tenetur soluta neque magni quia laboriosam natus velit dolores modi cum. Assumenda, sed.",
    },
    {
        id: 2,
        title: "Portfolio 2",
        img: "https://images.pexels.com/photos/21287032/pexels-photo-21287032/free-photo-of-the-city-of-arts-and-sciences-in-valencia-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestiae quos commodi in veritatis, expedita vitae maxime tenetur soluta neque magni quia laboriosam natus velit dolores modi cum. Assumenda, sed.",
    },
    {
        id: 3,
        title: "Portfolio 3",
        img: "https://images.pexels.com/photos/6229780/pexels-photo-6229780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestiae quos commodi in veritatis, expedita vitae maxime tenetur soluta neque magni quia laboriosam natus velit dolores modi cum. Assumenda, sed.",
    },
    {
        id: 4,
        title: "Portfolio 4",
        img: "https://images.pexels.com/photos/15154326/pexels-photo-15154326/free-photo-of-red-armchairs-in-the-ferry-boat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestiae quos commodi in veritatis, expedita vitae maxime tenetur soluta neque magni quia laboriosam natus velit dolores modi cum. Assumenda, sed.",
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
                        <button>See Demo</button>
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

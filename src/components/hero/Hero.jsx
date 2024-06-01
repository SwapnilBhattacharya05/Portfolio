import React, { useEffect, useState } from 'react'
import "./Hero.scss"
import { motion } from 'framer-motion'
import { fetchData } from '../../api/Github';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-730%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 50,
        }
    },
}

const Hero = () => {
    const [data, setData] = useState([])

    const getLatest = async () => {
        try {
            const response = await fetchData()
            setData(response)
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLatest()
    }, [])

    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>SWAPNIL BHATTACHARYA</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
                    <div className="buttons">
                        <motion.button variants={textVariants}
                            onClick={() => {
                                window.open(data[0].html_url, "_blank")
                            }}>
                            See the Latest Works
                        </motion.button>
                        <motion.button variants={textVariants}
                        whileHover={{ backgroundColor: "white", color: "black" }}
                        onClick={() => { window.location.href = "#Contact" }}>
                            Contact Me
                        </motion.button>
                    </div>
                    <motion.img
                        src="img/scroll.png"
                        alt="scroll"
                        variants={textVariants}
                        animate="scrollButton"
                    />
                </motion.div>
                <motion.div className="slidingTextContainer"
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate"
                >
                    Developer Intrepid Explorer Melomaniac
                </motion.div>
            </div>
            <div className="imageContainer">
                <img
                    src="img/hero.png"
                    alt="hero"
                />

            </div>
        </div>
    )
}

export default Hero

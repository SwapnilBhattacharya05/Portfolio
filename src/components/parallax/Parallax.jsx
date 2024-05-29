import React, { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'

import "./Parallax.scss"



const Parallax = ({ type }) => {

    // !useRef HOOK USED TO REACH THAT TARGET
    const ref = useRef()

    // ?USING THE useScroll HOOK CAN REACH Y ACCESS PROGRESS
    // ?TARGET IS THE WHOLE SECTION

    // *ANIMATION STARTS WHEN THE TOP OF THE TARGET ELEMENT REACHES THE TOP OF THE VIEWPORT
    // *ANIMATION WILL END AT THE TOP OF THE TARGET ELEMENT AND REACHES THE BOTTOM OF THE VIEWPORT
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // ?CAN CREATE DIFFERENT TRANSITIONS USING useTransform() HOOK
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <div className='parallax'
            ref={ref}
            style={{
                background: type === "services"
                    ? "linear-gradient(180deg, #111132, #0c0c1d)"
                    : "linear-gradient(180deg, #111132, #505064)",
            }}
        >
            <motion.h1
                style={{
                    y: yText,
                }}
            >
                {
                    type === "services" ? "What I Do" : "What I Did?"
                }
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets"
                style={{
                    y: yBg,
                    backgroundImage: `url(${type === "services" ? "/img/planets.png" : "/img/sun.png"})`,
                }}
            ></motion.div>
            <motion.div className="stars"
                style={{
                    x: yBg,
                }}
            ></motion.div>
        </div>
    )
}

export default Parallax

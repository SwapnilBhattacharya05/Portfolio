import React, { useRef } from 'react'
import './Services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,

    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
}


const Services = () => {
    // ?CAN LISTEN THE TARGET ELEMENT USING useInView HOOK
    // *HERE THE TARGET IS THE SERVICES DIV

    const ref = useRef()
    // ?WILL BE TRIGGERED WHEN THE MARGIN IS REACHED
    const isInView = useInView(ref, { margin: "-100px" })


    return (
        <motion.div className='services'
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="textContainer"
                variants={variants}
            >
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer"
                variants={variants}
            >
                <div className="title">
                    <img src="img/people.webp" alt="title" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>&nbsp;Ideas
                    </h1>
                </div>

                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>&nbsp;Business.
                    </h1>
                    <button>WHAT I DO?</button>
                </div>
            </motion.div>

            <motion.div className="listContainer"
                variants={variants}
            >
                <motion.div className="box"
                    whileHover={{
                        background: "lightgray",
                        color: "black"
                    }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia mollitia libero laborum, asperiores eveniet, dolores accusamus incidunt ad quasi distinctio nam magni ex ipsa explicabo cumque eaque voluptatem at.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box"
                    whileHover={{
                        background: "lightgray",
                        color: "black"
                    }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia mollitia libero laborum, asperiores eveniet, dolores accusamus incidunt ad quasi distinctio nam magni ex ipsa explicabo cumque eaque voluptatem at.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box"
                    whileHover={{
                        background: "lightgray",
                        color: "black"
                    }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia mollitia libero laborum, asperiores eveniet, dolores accusamus incidunt ad quasi distinctio nam magni ex ipsa explicabo cumque eaque voluptatem at.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box"
                    whileHover={{
                        background: "lightgray",
                        color: "black"
                    }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia mollitia libero laborum, asperiores eveniet, dolores accusamus incidunt ad quasi distinctio nam magni ex ipsa explicabo cumque eaque voluptatem at.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Services

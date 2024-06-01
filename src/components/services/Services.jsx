import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Services.scss'

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
                    I Focus on Developing and
                    <br />Learning Everyday
                </p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer"
                variants={variants}
            >
                <div className="title">
                    <img src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development.jpg" alt="title" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>&nbsp;Ideas
                    </h1>
                </div>

                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>&nbsp;Website.
                    </h1>
                    <button
                        onClick={() => window.open("https://github.com/SwapnilBhattacharya05?tab=repositories", "_blank")}>MY BUILDS?</button>
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
                    <div className="wrapper">
                        <img id='vite'
                            src="/vite.svg"
                            alt="vite"
                            style={{
                                filter: "drop-shadow(0px 0px 15px rgba(241, 85, 241, 0.455)) drop-shadow(0px 0px 15px rgba(235, 235, 22, 0.395))"
                            }}
                        />
                        <h2>Vite</h2>
                    </div>
                    <p>
                        Vite + React: Fast builds, hot module replacement, and efficient bundling streamline React app development with minimal setup for high performance.
                    </p>
                    <button onClick={() => window.open("https://vitejs.dev/", "_blank")}>Go</button>
                </motion.div>

                <motion.div className="box"
                    whileHover={{
                        background: "lightgray",
                        color: "black"
                    }}>
                    <div className="wrapper">
                        <img id='framer'
                            src="https://www.framer.com/images/favicons/favicon.png"
                            alt="framer motion"
                            style={{
                                filter: "drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5)) drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.5))"
                            }}
                        />
                        <h2>Motion</h2>
                    </div>
                    <p>
                        Framer Motion: A React animation library with intuitive APIs, facilitating fluid and interactive user interface design for dynamic web applications.
                    </p>
                    <button onClick={() => window.open("https://www.framer.com/motion/", "_blank")}>Go</button>
                </motion.div>

                <motion.div className="box"
                    whileHover={{
                        background: "lightgray",
                        color: "black"
                    }}>
                    <div className="wrapper">
                        <img src="https://nodejs.org/static/images/favicons/favicon.png"
                            alt="vite"
                            style={{
                                filter: "drop-shadow(0px 0px 15px rgba(0, 255, 0, 0.7)) drop-shadow(0px 0px 15px rgba(128, 0, 128, 0.5))"
                            }}
                        />
                        <h2>Nodejs</h2>
                    </div>
                    <p>
                        Node.js: JavaScript runtime for server-side execution, leveraging Chrome's V8 engine, with a rich ecosystem supporting scalable and efficient web applications.
                    </p>
                    <button onClick={() => window.open("https://nodejs.org/en/", "_blank")}>Go</button>
                </motion.div>

                <motion.div className="box"
                    whileHover={{
                        background: "lightgray",
                        color: "black"
                    }}>
                    <div className="wrapper">
                        <img src="https://www.mongodb.com/favicon.ico"
                            alt="vite"
                            style={{
                                filter: "drop-shadow(0px 0px 15px rgba(0, 255, 0, 0.3)) drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5))"
                            }}
                        />
                        <h2>MongoDB</h2>
                    </div>
                    <p>
                        MongoDB: A NoSQL database renowned for its flexibility, scalability, and document-oriented structure, facilitating efficient storage and retrieval of data for modern applications.
                    </p>
                    <button onClick={() => window.open("https://www.mongodb.com/", "_blank")}>Go</button>
                </motion.div>

            </motion.div>

        </motion.div>
    )
}

export default Services

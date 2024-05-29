import React from 'react'
import { motion } from 'framer-motion'
import './Navbar.scss'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* SIDEBAR */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Swapnil Bhattacharya
                </motion.span>
                <div className="social">
                    <a href="https://github.com/SwapnilBhattacharya05" target='_blank'>
                        <img src="img/github.png" alt="social" />
                    </a>
                    <a href="https://www.instagram.com/iam___swapnil/" target='_blank'>
                        <img src="img/instagram.png" alt="social" />
                    </a>
                    <a href="https://www.facebook.com/swapnil.bhattacharya.39/" target='_blank'>
                        <img src="img/facebook.png" alt="social" />
                    </a>
                    <a href="https://www.linkedin.com/in/swapnil-bhattacharya-357ab527a/" target='_blank'>
                        <img src="img/linkedin.png" alt="social" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar

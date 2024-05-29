import React from 'react';
import './Cursor.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';


const Cursor = () => {
    const [position, setPosition] = useState(
        {
            x: 0,
            y: 0
        });

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition(
                {
                    x: e.clientX,
                    y: e.clientY
                }
            );
        };
        // !SHOULD USE useRef() WHEN WRITING IN REACT BUT SINCE OUR ELEMENT IS WINDOW CAN'T USE useRef()
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        };
    }, []);

    return (
        <motion.div className='cursor' animate={{
            x: position.x + 10,
            y: position.y + 10
        }}>

        </motion.div>
    )
}

export default Cursor;
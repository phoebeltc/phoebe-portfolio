import React, {useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";

import logo from '../images/phoebe-logo.svg'; 

const Header = () => {

    const [open, setOpen] = useState(false);

    const isOpen = () => {
        setOpen(!open);
    }


    return <>
    <div>
        <div className='nav-bar'>
            <img src={logo} alt="Phoebe Logo" />
            <div className='menu-icon' onClick={isOpen}>
                <input className="menu-icon__checkbox" type="checkbox" />
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <AnimatePresence>
            {
                open && (
                <motion.div className="wrapper">
                    <a href="">WORKS</a>
                    <a href="">ABOUT</a>
                    <a href="">CONTACT</a>
                </motion.div>
                )
            }
            </AnimatePresence>
        </div>
    </div>
    </>
}

export default Header;
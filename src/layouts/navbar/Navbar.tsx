import React, { useState } from 'react'

import { Link } from "react-router-dom";

import { GiHamburgerMenu } from 'react-icons/gi'

import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'

import './Navbar.css'

const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className="navbar">
                <div className="navbar__btn-cnt">
                    <button
                        onClick={() => setShow(true)}
                    >
                        <i><GiHamburgerMenu /></i></button>
                </div>
                <div className="navbar__logo-cnt">
                    <Link to="/" onClick={() => setShow(false)}>foodies</Link>
                </div>
                <div className="navbar__socials-cnt">
                    <h5>Follow us</h5>
                    <Link to="/"><AiFillInstagram /></Link>
                    <Link to="/"><AiFillTwitterCircle /></Link>
                    <Link to="/"><FaFacebook /></Link>
                </div>
            </div>
            <div className={`sidedrawer ${show ? 'show' : ''}`}>

                <button
                    onClick={() => setShow(false)}
                >
                    <i><CgClose style={{ color: 'white' }} /></i></button>
                <ul>
                    <li><Link to="/" onClick={() => setShow(false)}>FIND RECIPES!</Link></li>
                    <li><Link to="/pinned" onClick={() => setShow(false)}>PINNED</Link></li>
                    <li><Link to="/done" onClick={() => setShow(false)}>COMPLETED</Link></li>
                    <li><Link to="/favorites" onClick={() => setShow(false)}>FAVORITES</Link></li>
                </ul>
                <div className="sidedrawer__socials">
                    <h4>Follow foodies!</h4>
                    <div className="sidedrawer__socials__links">
                        <Link to="/"><AiFillInstagram /></Link>
                        <Link to="/"><AiFillTwitterCircle /></Link>
                        <Link to="/"><FaFacebook /></Link>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Navbar

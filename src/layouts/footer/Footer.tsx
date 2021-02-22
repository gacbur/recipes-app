import React from 'react'

import { Link } from 'react-router-dom'

import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__cnt">
                <div className="footer__cnt__left">
                    <h1>foodies<span>.</span></h1>
                </div>
                <div className="footer__cnt__right">
                    <div className="footer__cnt__right__navs">
                        <li><Link to="/pinned" >PINNED</Link></li>
                        <li><Link to="/done" >COMPLETED</Link></li>
                        <li><Link to="/favorites" >FAVORITES</Link></li>
                    </div>
                    <div className="footer__cnt__right__socials">
                        <Link to="/"><AiFillInstagram /></Link>
                        <Link to="/"><AiFillTwitterCircle /></Link>
                        <Link to="/"><FaFacebook /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React, { FC, SetStateAction } from 'react'

import { Link } from "react-router-dom";

import { GiHamburgerMenu } from 'react-icons/gi'

import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

import './Navbar.css'

type NavbarProps = {
    setShow: React.Dispatch<SetStateAction<boolean>>
}

const Navbar: FC<NavbarProps> = ({ setShow }) => {
    return (
        <div className="navbar">
            <div className="navbar__btn-cnt">
                <button
                    onClick={() => setShow(true)}
                >
                    <i><GiHamburgerMenu /></i></button>
            </div>
            <div className="navbar__logo-cnt">
                <Link to="/">foodies</Link>
            </div>
            <div className="navbar__socials-cnt">
                <h5>Follow us</h5>
                <Link to="/"><AiFillInstagram /></Link>
                <Link to="/"><AiFillTwitterCircle /></Link>
                <Link to="/"><FaFacebook /></Link>
            </div>
        </div>
    )

}
export default Navbar

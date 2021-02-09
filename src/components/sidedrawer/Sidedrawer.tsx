import React, { FC, SetStateAction } from 'react'

import { Link } from 'react-router-dom'

import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'

import './Sidedrawer.css'

type SidedrawerProps = {
    show: boolean,
    setShow: React.Dispatch<SetStateAction<boolean>>
}

const Sidedrawer: FC<SidedrawerProps> = ({ show, setShow }) => {
    return (
        <div className={`sidedrawer ${show ? 'show' : ''}`}>

            <button
                onClick={() => setShow(false)}
            >
                <i><CgClose style={{ color: 'white' }} /></i></button>
            <ul>
                <li><Link to="/">FIND RECIPES!</Link></li>
                <li><Link to="/pinned">PINNED</Link></li>
                <li><Link to="/done">DONE</Link></li>
                <li><Link to="/favorites">FAVORITES</Link></li>
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
    )
}

export default Sidedrawer

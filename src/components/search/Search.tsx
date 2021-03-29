import React, { useState, useEffect } from 'react';

import Axios from 'axios'

import { useDispatch } from 'react-redux'

import { getRecipes, recipesLoaded, recipesNotLoaded } from '../../redux/actions/recipesActions'

import { FaSearch } from 'react-icons/fa'

//@ts-ignore
import { scroller } from "react-scroll";

import './Search.css'


const Search = () => {
    const [searchValue, setSearchValue] = useState("")
    const [searchEmpty, setSearchEmpty] = useState(false)

    const [backgroundImage, setBackgroundImage] = useState('meat-grill')

    const dispatch = useDispatch()

    const backgrounds = ['meat-grill', 'pancakes', 'pizza', 'barbecue-wings']

    useEffect(() => {
        const randomizeBackground = () => {
            const index = Math.floor(Math.random() * backgrounds.length)
            setBackgroundImage(backgrounds[index])
        }
        randomizeBackground()
    }, [])

    const scrollToSection = () => {
        scroller.scrollTo("recipes-list", {
            duration: 600,
            delay: 0,
            smooth: "easeInOutQuark",
        })
    }

    const handleSubmit = (searchValue: string, e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchValue.length !== 0) {
            getSearchResults(searchValue)
            setSearchEmpty(false)
        } else {
            setSearchEmpty(true)
        }
    }

    const getSearchResults = (searchValue: string) => {
        dispatch(recipesNotLoaded())
        Axios.get(`${process.env.REACT_APP_API_URL}/recipes/complexSearch?number=16&query=${searchValue}&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(results => results.data.results)
            .then(recipes => {
                dispatch(getRecipes(recipes))
                dispatch(recipesLoaded())
                scrollToSection()
            })
            .catch(err => {
                console.log(err)
                dispatch(recipesNotLoaded())
            })
    }

    return (
        <div className="search" style={{ backgroundImage: `url(/${backgroundImage}.jpg)` }}>
            <div className="search__form">
                <h1>Find a Recipe</h1>
                <form onSubmit={(e) => handleSubmit(searchValue, e)}>
                    <input
                        value={searchValue}
                        placeholder={searchEmpty ? 'Search cannot be empty...' : 'example: pizza, spaghetti...'}
                        onChange={(e) => setSearchValue(e.target.value)}
                        type="text"
                    />
                    <button><FaSearch /></button>
                </form>
            </div>
        </div>
    )
}

export default Search

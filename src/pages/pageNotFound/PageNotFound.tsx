import React from 'react'

import { useHistory } from "react-router-dom";

import './PageNotFound.css'

import { HiArrowNarrowLeft } from 'react-icons/hi'

const PageNotFound = () => {

    let history = useHistory();

    return (
        <div className="page-not-found">
            <div className="page-not-found__button">
                <button
                    onClick={() => history.goBack()}
                >
                    <HiArrowNarrowLeft />
                </button>
            </div>
            <div className="page-not-found__text">
                <h1>404</h1>
                <h2>Page Not found, Sorry!</h2>
            </div>

        </div>
    )
}

export default PageNotFound

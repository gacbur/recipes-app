import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Pinned from '../../pages/pinned/Pinned'
import Done from '../../pages/done/Done'
import Favorites from '../../pages/favorites/Favorites'

import './Main.css'

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pinned" exact component={Pinned} />
                <Route path="/done" exact component={Done} />
                <Route path="/favorites" exact component={Favorites} />
            </Switch>
        </div>
    )
}

export default Main

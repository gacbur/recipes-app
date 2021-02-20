import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Pinned from '../../pages/pinned/Pinned'
import Done from '../../pages/done/Done'
import Favorites from '../../pages/favorites/Favorites'
import SingleRecipe from '../../pages/singleRecipe/SingleRecipe'
import PageNotFound from '../../pages/pageNotFound/PageNotFound'

import './Main.css'

// @ts-ignore
import { NotificationContainer } from 'react-notifications';

const Main = () => {
    return (
        <div className="main">
            <NotificationContainer />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pinned" exact component={Pinned} />
                <Route path="/done" exact component={Done} />
                <Route path="/favorites" exact component={Favorites} />
                <Route path="/recipe/:id" exact component={SingleRecipe} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default Main

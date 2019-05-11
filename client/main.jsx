import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../imports/ui/components/privateRoute'

import App from '/imports/ui/App'

import Posts from '../imports/ui/routes/posts'

import Register from '../imports/ui/routes/auth/register'
import Login from '../imports/ui/routes/auth/login'

import CreatePost from '../imports/ui/routes/dashboard/new'

function Main() {
    return (
        <BrowserRouter>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={App} />
        </BrowserRouter>
    )
}

Meteor.startup(() => {
    render(<Main />, document.getElementById('react-target'))
})

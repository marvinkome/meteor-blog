import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../imports/ui/components/privateRoute'

import App from '/imports/ui/App'
import Posts from '../imports/ui/routes/posts'
import Register from '../imports/ui/routes/auth/register'
import Login from '../imports/ui/routes/auth/login'

function Main() {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />

                    <PrivateRoute exact path="/" component={Posts} />
                </Switch>
            </App>
        </BrowserRouter>
    )
}

Meteor.startup(() => {
    render(<Main />, document.getElementById('react-target'))
})

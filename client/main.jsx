import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from '/imports/ui/App'
import Posts from '../imports/ui/routes/posts'

function Main() {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={Posts} />
                </Switch>
            </App>
        </BrowserRouter>
    )
}

Meteor.startup(() => {
    render(<Main />, document.getElementById('react-target'))
})

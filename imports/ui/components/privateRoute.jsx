import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

function PrivateRoute({ component: Component, currentUser, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (currentUser) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                }
            }}
        />
    )
}

export default withTracker(() => ({
    currentUser: Meteor.user()
}))(PrivateRoute)

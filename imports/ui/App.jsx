import React, { useEffect, useState } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Route, Link } from 'react-router-dom'

// routes
import Posts from './routes/posts'
import Dashboard from './routes/dashboard'
import Post from './routes/posts/single'

function logout(e, history) {
    e.preventDefault()
    Meteor.logout((e) => {
        if (e) {
            console.error(e.reason)
            alert('Error logging out')
        } else {
            history.push('/login')
        }
    })
}

function App({ history, userId, user }) {
    const [isAuth] = useState(!!userId)
    useEffect(() => {
        if (!isAuth) {
            history.push('/login')
        }
    })

    return (
        <div>
            {/* Header */}
            <nav>
                <div className="container nav-wrapper">
                    <Link to="/" className="brand-logo">
                        Blog Website
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {Roles.userIsInRole(user, ['admin']) && (
                            <>
                                <li>
                                    <Link to="/dashboard/create">Create new post</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/users">All Users</Link>
                                </li>
                            </>
                        )}
                        <li>
                            <a href="#" onClick={(e) => logout(e, history)}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="page-container">
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/" component={Posts} />
                <Route exact path="/blog/:id" component={Post} />
            </div>

            {/* Footer */}
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container">© 2019 Copyright . Blog Website</div>
                </div>
            </footer>
        </div>
    )
}

export default withTracker(() => ({
    userId: Meteor.userId(),
    user: Meteor.user()
}))(App)

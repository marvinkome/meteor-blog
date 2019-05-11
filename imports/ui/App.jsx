import React, { useEffect, useState } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

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

function App({ children, currentUser, history }) {
    const [isAuth] = useState(!!currentUser)
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
                    <a href="#" className="brand-logo">
                        Blog Website
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="#" onClick={(e) => logout(e, history)}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="page-container">{children}</div>

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
    currentUser: Meteor.userId()
}))(App)

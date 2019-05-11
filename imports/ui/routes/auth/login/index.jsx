import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'

function handleLogin(e, history) {
    e.preventDefault()

    const email = e.target['email'].value
    const password = e.target['password'].value

    Meteor.loginWithPassword(email, password, (err, res) => {
        if (err) {
            console.error(err)
            return alert('Email or password is incorrect')
        } else {
            // then redirect to home page
            history.push('/')
        }
    })
}

function Login({ history }) {
    return (
        <div className="container">
            <h2>Login Page</h2>

            <form className="col s12" onSubmit={(e) => handleLogin(e, history)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="email" placeholder="Email" id="email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="password" placeholder="Password" id="password" required />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>

                <button className="waves-effect waves-light btn">Login</button>
            </form>

            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    )
}

export default Login

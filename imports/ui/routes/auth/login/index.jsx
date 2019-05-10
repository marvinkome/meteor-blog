import React from 'react'
import { Meteor } from 'meteor/meteor'

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
        <div className="auth-form">
            <form className="form-cont" onSubmit={(e) => handleLogin(e, history)}>
                <div className="field">
                    <label>Email: </label>
                    <input type="email" placeholder="Email" id="email" required />
                </div>

                <div className="field">
                    <label>Password: </label>
                    <input type="password" placeholder="Password" id="password" required />
                </div>

                <button className="submit">Login</button>
            </form>

            <p>Don't have an account? Register</p>
        </div>
    )
}

export default Login

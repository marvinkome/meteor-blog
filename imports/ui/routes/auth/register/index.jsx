import React from 'react'
import { Meteor } from 'meteor/meteor'

function handleRegister(e, history) {
    e.preventDefault()

    const name = e.target['name'].value
    const email = e.target['email'].value
    const password = e.target['password'].value

    // check if email has been taken
    Meteor.call('users.checkEmail', email, (err, res) => {
        if (err) {
            console.error(err)
            return alert('Error creating account, Please try again')
        }

        if (res) {
            return alert('Email already taken, try a new one!')
        }

        // then create user based on result
        Meteor.call(
            'users.register',
            {
                name,
                email,
                password
            },
            (err) => {
                if (err) {
                    console.error(err)
                    return alert('Error creating account, Please try again')
                }
            }
        )

        // then redirect to home page
        history.push('/')
    })
}

function Register({ history }) {
    return (
        <div className="auth-form">
            <form className="form-cont" onSubmit={(e) => handleRegister(e, history)}>
                <div className="field">
                    <label>Name: </label>
                    <input type="text" placeholder="Name" id="name" required />
                </div>

                <div className="field">
                    <label>Email: </label>
                    <input type="email" placeholder="Email" id="email" required />
                </div>

                <div className="field">
                    <label>Password: </label>
                    <input type="password" placeholder="Password" id="password" required />
                </div>

                <div className="field">
                    <input type="checkbox" id="checkbox" required />
                    <label>I agree to the Terms and Conditions</label>
                </div>

                <button className="submit">Register</button>
            </form>
        </div>
    )
}

export default Register

import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'

function handleRegister(e, history) {
    e.preventDefault()

    const name = e.target['name'].value
    const email = e.target['email'].value
    const password = e.target['password'].value

    // create user
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
            } else {
                // then redirect to home page
                history.push('/')
            }
        }
    )
}

function Register({ history }) {
    return (
        <div className="container">
            <h2>Register Page</h2>

            <form className="col s12" onSubmit={(e) => handleRegister(e, history)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="text" placeholder="Name" id="name" required />
                        <label>Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input type="email" placeholder="Email" id="email" required />
                        <label>Email</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input type="password" placeholder="Password" id="password" required />
                        <label>Password</label>
                    </div>
                </div>

                <p>
                    <label>
                        <input className="filled-in" type="checkbox" id="checkbox" required />
                        <span>I agree to the terms and conditions</span>
                    </label>
                </p>

                <button className="waves-effect waves-light btn">Register</button>
            </form>

            <p>
                Have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    )
}

export default Register

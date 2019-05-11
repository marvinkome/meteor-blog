import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { check } from 'meteor/check'

import Posts from '../imports/api/posts'

// TODO::add db methods
Meteor.methods({
    'users.register': function({ name, ...data }, cb) {
        check(name, String)
        check(data, {
            email: String,
            password: String
        })

        let role = 'guest'

        // check if it's the first user
        if (Meteor.users.find().count() === 0) {
            // and assign admin role
            role = 'admin'
        }

        // create user account
        const id = Accounts.createUser(
            {
                ...data,
                profile: { name }
            },
            cb
        )

        // add user to role
        Roles.addUsersToRoles(id, [role], Roles.GLOBAL_GROUP)
    }
})

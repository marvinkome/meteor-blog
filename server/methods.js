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
    },

    'posts.createPost': function(data) {
        check(data, {
            title: String,
            content: String
        })

        const user = Meteor.users.findOne({ _id: this.userId })
        const isAdmin = Roles.userIsInRole(user, ['admin'])
        if (!isAdmin) {
            throw new Meteor.Error('unauthorized', 'Only admin can create posts')
        }

        const post = {
            author: user,
            date: new Date(),
            title: data.title,
            content: data.content
        }

        return Posts.insert(post)
    },

    'posts.deletePost': function(id) {
        check(id, String)
        const post = Posts.findOne(id)
        const isAdmin = Roles.userIsInRole(this.userId, ['admin'])

        if (isAdmin && post.author !== this.userId) {
            Posts.remove(id)
        } else {
            throw new Meteor.Error('not-authorized')
        }
    },

    'posts.updatePost': function(data) {
        check(data, {
            id: String,
            title: String,
            content: String
        })

        const { id, ...rest } = data
        return Posts.update({ _id: id }, { $set: rest })
    }
})

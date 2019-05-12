import { Meteor } from 'meteor/meteor'
import Posts from '../imports/api/posts'

Meteor.publish('posts', function() {
    if (this.userId) {
        // Can add custom args
        return Posts.find()
    } else {
        throw new Error('unauthorized', 'You must be logged in to get posts')
    }
})

Meteor.publish('users', function() {
    // if it's not an admin throw error
    const user = Meteor.users.findOne({ _id: this.userId })
    const isAdmin = Roles.userIsInRole(user, ['admin'])
    if (!isAdmin) {
        throw new Meteor.Error('unauthorized', 'Only admin can create posts')
    }

    return Meteor.users.find()
})

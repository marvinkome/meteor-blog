import { Meteor } from 'meteor/meteor'
import Post from '../imports/api/posts'

Meteor.publish('posts', function() {
    // Can add custom args
    return Posts.find()
})

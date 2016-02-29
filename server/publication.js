import {Tweets} from '../lib/collections.js';

Meteor.publish('myTweets', function() {
  this.autorun(function() {
    var cursors = [];
    var user = Meteor.users.findOne(this.userId);
    var followingIds = [];
    followingIds.push(user.profile.followingIds);
    followingIds.push(this.userId);
    followingIds = _(followingIds).flatten();
    users = Meteor.users.find({_id: {$in: followingIds}}, {fields: {profile: 1, username: 1}});
    tweets = Tweets.find({userId: {$in: followingIds}});
    cursors.push(tweets);
    cursors.push(users);
    return cursors;
  });
});

Meteor.publish('profileWithTweets', function(username) {
  let user = Meteor.users.find({username: username});
  let fetchedUser = user.fetch();
  if (fetchedUser.length == 0) {
    return []
  } else {
    let userId = fetchedUser[0]._id;
    let tweets = Tweets.find({userId: userId});
    return [user, tweets]
  }
});

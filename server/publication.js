import {Tweets} from '../lib/collections.js';

Meteor.publish('tweets', function() {
  return Tweets.find();
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

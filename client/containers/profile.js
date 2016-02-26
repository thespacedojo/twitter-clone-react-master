import {composeWithTracker} from 'react-komposer';
import {Profile} from '../components/profile.jsx';
import {Tweets} from '../../lib/collections.js'

function composer(props, onData) {
  const handle = Meteor.subscribe('profileWithTweets', props.username);
  if(handle.ready()) {
    const user = Meteor.users.findOne({username: props.username});
    const tweets = Tweets.find({userId: user._id}).fetch();
    const currentUser = Meteor.user();
    onData(null, {user, tweets, currentUser});
  };
};

export default composeWithTracker(composer)(Profile);

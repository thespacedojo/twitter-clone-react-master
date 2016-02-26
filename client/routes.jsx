import React from 'react';
import {mount} from 'react-mounter';

// import app modules
import {AppLayout} from './layout.jsx';


import TweetStream from './containers/tweet_stream.js';
import Profile from './containers/profile.js';
import {Notifications} from './components/notifications.jsx';
import SignUp from './components/signup.jsx';
import SignIn from './components/signin.jsx';

FlowRouter.route("/", {
  name: 'Home',
  action() {
    mount(AppLayout, {
      content: () => (<TweetStream />)
    });
  }
});

FlowRouter.route("/u/:username", {
  name: 'Profile',
  action(params) {
    mount(AppLayout, {
      content: () =>  (<Profile username={params.username}/>)
    });
  }
});

FlowRouter.route("/notifications", {
  name: 'Notifications',
  action() {
    mount(AppLayout, {
      content: () => (<Notifications />)
    });
  }
});

FlowRouter.route("/sign-up", {
  name: 'SignUp',
  action() {
    mount(AppLayout, {
      content: () => (<SignUp />)
    });
  }
});

FlowRouter.route("/sign-in", {
  name: 'SignIn',
  action() {
    mount(AppLayout, {
      content: () => (<SignIn />)
    });
  }
});

FlowRouter.route("/sign-out", {
  name: 'SignOut',
  action() {
    Meteor.logout();
    FlowRouter.go('/sign-in')
  }
});

import React from 'react';
import {mount} from 'react-mounter';

// import app modules
import {AppLayout} from './layout.jsx';


import {TweetStream} from './components/tweet_stream.jsx';
import {Profile} from './components/profile.jsx';
import {Notifications} from './components/notifications.jsx';
import SignUp from './components/signup.jsx';
import SignIn from './components/signin.jsx';

FlowRouter.route("/", {
  name: 'Home',
  action() {
    mount(AppLayout, {
      content: <TweetStream />
    });
  }
});

FlowRouter.route("/profile", {
  name: 'Profile',
  action() {
    mount(AppLayout, {
      content: <Profile />
    });
  }
});

FlowRouter.route("/notifications", {
  name: 'Notifications',
  action() {
    mount(AppLayout, {
      content: <Notifications />
    });
  }
});

FlowRouter.route("/sign-up", {
  name: 'SignUp',
  action() {
    mount(AppLayout, {
      content: <SignUp />
    });
  }
});

FlowRouter.route("/sign-in", {
  name: 'SignIn',
  action() {
    mount(AppLayout, {
      content: <SignIn />
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

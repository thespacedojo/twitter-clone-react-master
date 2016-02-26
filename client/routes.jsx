import React from 'react';
import {mount} from 'react-mounter';

// import app modules
import {AppLayout} from './layout.jsx';


import {TweetStream} from './components/tweet_stream.jsx';
import {Profile} from './components/profile.jsx';
import {Notifications} from './components/notifications.jsx';

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

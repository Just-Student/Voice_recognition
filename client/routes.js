import React, { Component } from 'react';
import {mount} from 'react-mounter';
import Home from './components/Home.jsx';
import Homepage from './views/Homepage.jsx';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';
import App from '../imports/ui/App.jsx';

import Map from './views/Map.jsx';
import Introduction from './views/Introduction.jsx';
import Vocabulary from './views/Vocabulary.jsx';


FlowRouter.route('/Vocabulary/:location_id', {
  name: 'Vocabulary',
  action(params) {
    mount(Home, {
      content: <Vocabulary location_id = {params.location_id}/>
    });
  }
});


FlowRouter.route('/Introduction/:location_id', {
  name: 'Introduction',
  action(params) {
    mount(Home, {
      content: <Introduction location_id = {params.location_id} />
    });
  }
});


FlowRouter.route('/map/:quest_id', {
  name: 'map',
  action(params) {
    mount(Home, {
      content: <Map quest_id = {params.quest_id}/>
    });
  }
});


FlowRouter.route('/', {
  name: 'home',
  action: function() {
     mount(Home, {
       content: <Homepage />
     });

  }
});

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    mount(Home, {
      content: <Login />
    });
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action: function() {
    mount(Home, {
      content: <Register />
    });
  }
});

FlowRouter.route('/Dashboard', {
  name: 'Dashboard',
  action: function() {
    mount(Home, {
      content: <App />
    });
  }
});


FlowRouter.route('/logout', {
  name: 'logout',
  action: function() {
    Meteor.logout(function(){
      FlowRouter.go('home');
        });
  }
});

FlowRouter.notFound = {
  action: function() {
   FlowRouter.go('home');
  }
};

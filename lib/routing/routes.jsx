import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

publicRoutes = FlowRouter.group({
  name:'publicroutes'
});

publicRoutes.route('/',{
  name:'Home',
  action(){
    mount(Homelayout,{})
  }
});

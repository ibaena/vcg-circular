import React from 'react';
import { mount } from 'react-mounter';

Adminlayout = React.createClass({
  render(){
    return (
      <div className="container">
        <Dashboard />
      </div>
    )
  }
});

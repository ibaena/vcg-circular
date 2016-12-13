import React from 'react';
import { mount } from 'react-mounter';

Adminlayout = React.createClass({
  render(){
    return (
      <div>

        <div className="container">
        <Sidebar />
        <Dashboard />
        </div>
      </div>
    )
  }
});

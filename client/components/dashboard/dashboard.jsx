import React from 'react';
import { mount } from 'react-mounter';

Dashboard = React.createClass({
componentDidMount(){

},
  render(){

    return (
      <div className="dash-container row">
        <FormProduct />
        <List />
      </div>
    )
  }
});

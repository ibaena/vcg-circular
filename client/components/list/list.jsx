import React from 'react';
import { mount } from 'react-mounter';

List = React.createClass({
  componentDidMount(){
  },
  products() {
  return Products.find({}).fetch();
},
  render(){
    return (
      <div className="list-container">
        <div className="col-lg-5 col-lg-offset-1 list-card">
          Products List
        </div>
      </div>
    )
  }
});

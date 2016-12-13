import React from 'react';
import { mount } from 'react-mounter';

Sidebar = React.createClass({
  componentDidMount(){
    $('.form-card').hide();
    $('#addProduct').on('click', function(){
      $('.form-card').toggle();
    });
  },
  render(){
    return (
      <div className="sidebar-container">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="/" className="list-item-link">View Page</a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" className="list-item-link" id="addProduct">Add Product</a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" className="list-item-link">Menu Item 1</a>
          </li>
        </ul>
      </div>
    )
  }
});

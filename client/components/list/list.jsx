import React from 'react';
import { mount } from 'react-mounter';
import ReactDOM from 'react-dom';

List = React.createClass({
  getInitialState(){
    let state = {};
    state.allProducts = [];
    return state;
  },
  mixins: [ReactMeteorData],
  getMeteorData(){
    var producthandle = Meteor.subscribe("AllProducts")
    var data = {};
    if(producthandle.ready() ){
        this.state.allProducts = Products.find({}).fetch();
    }
    return data;
  },
  componentDidMount(){

  },
  render(){
      var prod = this.state.allProducts;
      var countProd = prod.map(function(item){

        return(
          <li key={item._id}>
            <span>{item.name}</span>
            <span className="margin-left">{item.price} {item.suffix}</span>
          </li>
        )
      });
    return (
      <div className="list-container">
        <div className="col-lg-5 col-lg-offset-1 list-card">
          <ul>
            {countProd}
          </ul>
        </div>
      </div>
    )
  }
});

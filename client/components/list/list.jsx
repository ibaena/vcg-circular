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

            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id={item._id}>
                <h4 className="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapse"+item._id} aria-expanded="false" aria-controls={"collapse"+item._id} >
                    {item.name}
                  </a>
                </h4>
              </div>
              <div id={"collapse"+item._id} className="panel-collapse collapse" role="tabpanel" aria-labelledby={item._id}>
                <div className="panel-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <span className="small-text">Unit Price</span> <br />
                    {item.price}
                  </li>
                  <li className="list-group-item">
                    <span className="small-text">Unit Description</span> <br />
                    {item.description}
                  </li>
                </ul>
                </div>
              </div>
            </div>

        )
      });
    return (
      <div className="list-container">
        <div className="col-lg-5 col-lg-offset-1 list-card">
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            {countProd}
          </div>
        </div>
    </div>
    )
  }
});

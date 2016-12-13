import React from 'react';
import { mount } from 'react-mounter';

products: Meteor.subscribe("products");

Dashboard = React.createClass({
  addProduct(event) {
  event.preventDefault();
  var name = this.refs.name.value.trim();
  var description = this.refs.description.value.trim();
  var price = this.refs.price.value.trim();
  var featured = this.refs.featured.checked;
  var image = this.refs.image.value.trim();
  var suffix = this.refs.suffix.value.trim();

  if (name) {
    Meteor.call('addProduct', {name: name, description: description, price: price, featured: featured, image: image, suffix: suffix}, () => {
      this.refs.name.value = "";
      this.refs.description.value = "";
      this.refs.price.value = "";
      this.refs.image.value = "";
      this.refs.featured.checked = false;
      this.refs.suffix.value = "";
    });
  }
},

componentDidMount(){

},
  render(){
    console.log(this.products);
    return (
      <div className="dash-container">
        <FormProduct />
      </div>
    )
  }
});

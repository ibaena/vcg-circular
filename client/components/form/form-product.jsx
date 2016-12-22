import React from 'react';
import { mount } from 'react-mounter';

FormProduct = React.createClass({
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
  render(){
    return (
      <form onSubmit={this.addProduct} className="col-lg-6 form-card">
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input type="text" ref="name" className="form-control" id="productName" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Description</label>
          <textarea type="text" rows="5" ref="description" className="form-control" id="productDescription" placeholder="Description"></textarea>
        </div>
          <div className="form-group col-lg-6 no-padding">
            <label htmlFor="productPrice">Price</label>
            <input type="text" ref="price" className="form-control" id="productPrice" placeholder="Price" />
          </div>
          <div className="form-group col-lg-6">
          <div className="col-lg-6">
            <label htmlFor="suffix">Suffix</label>
            <select className="form-control" id="suffix" ref="suffix">
              <option>lbs.</option>
              <option>ea.</option>
              </select>
          </div>
          </div>
        <div className="form-group">
          <label htmlFor="fileInput">File input</label>
          <input type="file" ref="image" id="fileInput" />
          <p className="help-block">Please use png or jpg file extension only</p>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" ref="featured" value="true"/> Featured Product
          </label>
          </div>
        <button type="submit" className="btn btn-default">Submit</button>

      </form>
    )
  }
});

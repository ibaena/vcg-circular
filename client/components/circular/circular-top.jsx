import React from 'react';
import { mount } from 'react-mounter';

CircularTop = React.createClass({
  componentDidMount(){
    $('.overlay').hide();

    $(".featured-product-container").hover(function () {
      $(".overlay").slideDown(300);
    }, function() {
      $(".overlay").slideUp(300);
    });
  },

  render(){
    var regularItems = this.testArray.map(function(item){
      return (
        <div className="regular-product-container" key={item._id}>
          <div className="col-lg-6 regular-item-box">
            <img src="http://placehold.it/125x165" className="regular-product-image"/>
            <div className="regular-product-description-box col-lg-7 col-lg-offset-5">
              <h4 className="regular-header-text">{item.name}</h4>
              <p className="regular-product-description-text">
                {item.description}
              </p>
              <h4 className="regular-product-price">
                {item.price}<small> {item.suffix}</small>
              </h4>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="container">
        <div className="col-lg-12">

          <div className="circular-wrapper-top">
            <div className="col-lg-6 no-padding">
              <div className="featured-product-container">
                <img src="http://placehold.it/125x165" className="featured-product-image"/>
                <div className="overlay">
                  <div className="col-lg-8">
                    <h3 className="featured-product-header">Featured Title</h3>
                    <p className="featured-product-description">
                      Featured Product Description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    </p>
                  </div>
                  <div className="col-lg-4">
                  <h4 className="featured-product-price">
                    4.99<small> lb.</small>
                  </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 no-padding">
              {regularItems}
            </div>
          </div>

        </div>
      </div>
    )
  }
});

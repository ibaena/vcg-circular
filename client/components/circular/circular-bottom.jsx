import React from 'react';
import { mount } from 'react-mounter';

CircularBottom = React.createClass({
  split:[
    {_id:'0', name:'Title 1', description:'Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', price: '17.99', suffix:'lb.', src:'http://placehold.it/160x150'},
    {_id:'1', name:'Title 2', description:'Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', price: '0.99', suffix:'ea.', src:'http://placehold.it/160x150'},
  ],
  middle:[
    {_id:'0', name:'Title 1', description:'Lorem Ipsum 1 is simply dummy text of the printing and typesetting', price: '17.99', suffix:'lb.'},
    {_id:'1', name:'Title 2', description:'Lorem Ipsum 2 is simply dummy text of the printing and typesetting', price: '0.99', suffix:'ea.'},
    {_id:'2', name:'Title 3', description:'Lorem Ipsum 3 is simply dummy text of the printing and typesetting', price: '8.99', suffix:'lb.'},
    {_id:'3', name:'Title 4', description:'Lorem Ipsum 4 is simply dummy text of the printing and typesetting', price: '1.99', suffix:'lb.'},
  ],
  componentDidMount(){
    $('.overlay-right').hide();

    $("#bottom-featured").hover(function () {
      $(".overlay-right").show('slide', {direction: 'right'}, 300);
    }, function() {
      $(".overlay-right").hide('slide', {direction: 'right'}, 300);
    });
  },
  render(){
    var split = this.split.map(function(item){
      return (
        <div className="bottom-product-split border-bottom col-lg-12">
            <img src={item.src} className="bottom-image-left" />
            <div className="bottom-left-description col-lg-6 col-lg-offset-5">
                <h4 className="bottom-left-header">{item.name}</h4>
                <p className="bottom-left-text">{item.description}</p>
                <h4 className="bottom-left-product-price">
                  {item.price}<small> {item.suffix}</small>
                </h4>
            </div>
        </div>
      )
    });
    var middle = this.middle.map(function(item){
      return (
        <li className="bottom-list-item">
          <h4 className="bottom-list-header mild-margin-bottom">{item.name}</h4>
          <p className="middle-description" >{item.description}</p>
          <h3 className="middle-price no-margin-top">{item.price} <small> {item.suffix}</small></h3>
        </li>
      )
    });
    return (
      <div className="container">
          <div className="col-lg-12">

              <div className="circular-wrapper-bottom">

                  <div className="col-lg-4 no-padding">
                      <div className="bottom-section-product">
                        {split}
                      </div>
                  </div>

                  <div className="col-lg-4 no-padding">
                      <div className="bottom-section-product col-lg-12">
                        <ul className="bottom-middle-list">
                          {middle}
                        </ul>
                      </div>
                  </div>

                  <div className="col-lg-4 no-padding">
                      <div className="bottom-section-product col-lg-12 no-padding" id="bottom-featured">
                        <img src="http://placehold.it/350x150" className="bottom-right-img" />
                        <div className="overlay-right">
                          <div className="col-lg-6">
                            <h3 className="bottom-right-header">Featured Title</h3>
                          <p className="bottom-right-description">
                            Featured Product Description
                          </p>
                        </div>
                        <div className="col-lg-4">
                        <h4 className="bottom-right-price">
                          4.99<small> lb.</small>
                        </h4>
                        </div>
                        </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    )
  }
});

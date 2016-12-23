import React from 'react';
import { mount } from 'react-mounter';

SearchBar = React.createClass({
  render(){
    return (
      <div className="searchbar-container" >
        <form className="form-horizontal">
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
        </form>
      </div>
    )
  }
});

import React, { Component } from 'react';


class TaskSearch extends Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
              <input type="text" name="" id="input" className="form-control" placeholder="Nhập từ khóa" />
              <span className="input-group-btn">
                <button type="button" className="btn btn-primary"><i className="fa fa-search"></i> Tìm kiếm</button>
              </span> 
            </div>                       
        </div>
    );
  }
}

export default TaskSearch;

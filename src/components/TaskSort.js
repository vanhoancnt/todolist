import React, { Component } from 'react';


class TaskSort extends Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" 
                    type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
              Sắp xếp <i className="fa fa-angle-double-down"></i>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" ><i className="fa fa-sort-alpha-down"></i>  Từ A-Z</a></li>
              <li><a className="dropdown-item" ><i className="fa fa-sort-alpha-up"></i>  Từ Z-A</a></li>
              <hr/>
              <li><a className="dropdown-item" >Trạng thái kích hoạt</a></li>
              <li><a className="dropdown-item" >Trạng thái ẩn</a></li>
            </div>
          </div>
        </div>
    );
  }
}

export default TaskSort;

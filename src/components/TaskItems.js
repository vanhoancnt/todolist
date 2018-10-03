import React, { Component } from 'react';


class TaskItems extends Component {

  onDelete =()=>{
    this.props.onDelete(this.props.task.id);
  }
  onUpdate =()=>{
    this.props.onUpdate(this.props.task.id);
  }
  render() {
    var {task,index} =this.props;
    return (
      <tr>
        <td className="center">{index +1}</td>
        <td className="center">{task.name}</td>
        <td className="center">
        {task.status?<span className="label label-success">Kích Hoạt</span>:<span className="label label-warning">Ẩn</span>}
        </td>
        <td className="center">
          <button type="button" className="btn btn-warning" onClick ={this.onUpdate}><i className="fa fa-edit"></i> Sửa</button> &nbsp;
          <button type="button" className="btn btn-danger" onClick={this.onDelete}><i className="fa fa-exclamation-circle"></i> Xóa</button>
        </td>
      </tr>
    );
  }
}

export default TaskItems;

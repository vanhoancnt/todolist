import React, { Component } from 'react';

import TaskItems from './TaskItems'
class TaskList extends Component {
  constructor(props){
    super(props);
    this.state={
      filterName:'',
      filterStatus:-1
    };
  }

  onChange =(event)=>{
    // console.log("changed");
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name ==='filterName'?value:this.state.filterName,
      name ==='filterStatus'?value:this.state.filterStatus
    );
    this.setState({
      [name] : value
    });
    
  }
  render() {
    var {tasks} =this.props;
    var eleTasks =tasks.map((task,index)=>{
      return <TaskItems key={task.id} index ={index} task={task} onDelete ={this.props.onDelete} onUpdate ={this.props.onUpdate}/>
    });
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="center">STT</th>
                <th className="center">Tên</th>
                <th className="center">Trạng thái</th>
                <th className="center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="center">
                  <input type="text" name="filterName" id="input" className="form-control" value={this.state.filterName} onChange={this.onChange} />
                </td>
                <td className="center">
                  <select name="filterStatus" value={this.state.filterStatus} id="input" className="form-control" onChange={this.onChange}>
                    <option value={-1}>Tất cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
                {eleTasks}
            </tbody>
          </table>
      </div>
    );
  }
}

export default TaskList;

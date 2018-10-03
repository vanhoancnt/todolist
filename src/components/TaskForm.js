import React, { Component } from 'react';


class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state={
      id:null,
      name:'',
      status:false
    };
  };

  componentWillMount(){
    if(this.props.taskEdit){
      var {taskEdit} = this.props;
      this.setState({
        id:taskEdit.id,
        name:taskEdit.name,
        status:taskEdit.status
      });
    }else{
      this.setState({
        id:null,
        name:'',
        status:false
      });
    }
  }

  onHandleClick=(event)=>{
      var target =event.target;
      var name =target.name;
      var value=target.value;
      if(name==='status'){
        value = target.value==='true'?true:false;
      }
      this.setState({
        [name]:value
      });
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.taskEdit){
      this.setState({
        id:nextProps.taskEdit.id,
        name:nextProps.taskEdit.name,
        status:nextProps.taskEdit.status
      });
    }
    if(this.props.id === null){
      console.log('ID null');
    }
  }
  onSubmit=(event)=>{
    event.preventDefault();
    // console.log("Submit");
    this.props.onReceiveTask(this.state);
    this.setState({
      id:null,
      name:'',
      status:false
    });
  }
  render() {
    var {id}=this.props;
    //console.log(taskEdit);
    // this.setState({
    //   name:taskEdit.name,
    //   status:taskEdit.status
    // });
    return (
        <div>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">{id !==null ?'Cập nhật công việc':'Thêm công việc'}</h3>
            </div>
            <div className="panel-body">
              <form action="" method="POST" role="form" onSubmit={this.onSubmit}>
              
                <div className="form-group">
                  <label >Tên:</label>
                  <input type="text" className="form-control" name="name" onChange={this.onHandleClick} value={this.state.name}/> <br/>
                  <label >Trạng thái:</label>
                  <select name="status" className="form-control"  value={this.state.status} required="required" onChange={this.onHandleClick}>
                    <option value={true}>Kích hoạt</option>
                    <option value={false}>Ẩn</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onHandleClick}><i className="fa fa-plus"></i> Lưu lại</button> &nbsp;
                <button type="button" className="btn btn-danger"><i className="fa fa-minus-circle"></i> Hủy bỏ</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default TaskForm;

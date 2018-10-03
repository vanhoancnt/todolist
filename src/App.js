import React, { Component } from 'react';
import './App.css';

import TaskForm from './components/TaskForm'
import TaskControl from './components/TaskControl'
import TaskList from './components/TaskList'

class App extends Component {
  constructor(props){
      super(props);
      this.state ={
        tasks:[],
        taskEdit:null,
        isDisplayForm: false,
        filter :{
          name:'',
          status:-1
        }
      };
  }

  onGenerateData =()=>{

    var randomstring =require("randomstring");
    var tasks =[
    {
      id:randomstring.generate(),
      name:'ReactJS Frontend',
      status:true
    },
    {
      id:randomstring.generate(),
      name:'Redux state manager',
      status:true
    },
    {
      id:randomstring.generate(),
      name:'React Native mobile',
      status:false
    }
    ];

    this.setState({
      tasks:tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  

  componentWillMount(){
      if(localStorage && localStorage.getItem('tasks') && localStorage.getItem('isDisplayForm')){
        var tasks =JSON.parse(localStorage.getItem('tasks'));
        var isDisplayForm =JSON.parse(localStorage.getItem('isDisplayForm'));
        this.setState({
          tasks:tasks,
          isDisplayForm:isDisplayForm
        });
      }
  }

  onReceiveTask =(data)=>{
    var {tasks} = this.state;
    if(data.id !==null){
        var index = this.findIndex(data.id);
        //var {tasks} = this.state;
        tasks[index]=data;
        this.setState({
          tasks:tasks,
        });
    }else{
      var randomstring =require("randomstring");
      data.id=randomstring.generate();
      //var {tasks}=this.state;
      tasks.push(data);
      this.setState({
        tasks:tasks,
        isDisplayForm:false,
        taskEdit:null
      });
    }
      // if(this.state.isDisplayForm === false){
      //   this.setState({
      //     taskEdit:null
      //   });
    //}
    localStorage.setItem('tasks',JSON.stringify(tasks));
    localStorage.setItem('isDisplayForm',JSON.stringify(!this.state.isDisplayForm));
    // this.onClearForm();
  }
  // onClearForm=()=>{
  //   this.setState({
  //     name:'',
  //     status:false
  //   });
  // }

  onDelete =(id)=>{
    var {tasks} = this.state;
    var index = this.findIndex(id);
    //console.log(index);
    tasks.splice(index,1);
    this.setState({
      tasks:tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  findIndex =(id)=>{
      var {tasks} = this.state;
      var result =-1;
      tasks.forEach((task, index)=>{
        if(task.id ===id){
          result=index;
        }
      });
      return result;
  }
  onUpdate =(id)=>{
    var {tasks} = this.state;
    var index = this.findIndex(id);
    var taskEdit = tasks[index];
    console.log(taskEdit);
    this.setState({
      taskEdit :taskEdit
    });
    this.onOpenForm();
  }

  onOpenForm=()=>{
    this.setState({
      isDisplayForm:true
    });
  }
  onAddTask =()=>{
    console.log("addTask");
    var {isDisplayForm}=this.state;
    this.setState({
      isDisplayForm:!isDisplayForm,
      taskEdit:null
    });
    localStorage.setItem('isDisplayForm',JSON.stringify(!this.state.isDisplayForm));
  }

  onFilter =(filterName,filterStatus)=>{
    //console.log(filterName +"-"+ filterStatus);
    filterStatus = parseInt(filterStatus,10);
    this.setState({
      filter:{
        name:filterName.toLowerCase(),
        status:filterStatus
      }
    });
  }
  render() {
    var {tasks, taskEdit,isDisplayForm,filter} = this.state;
    //console.log(filter);
    if(filter){
      if(filter.name){
        tasks = tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
    }
    return (
      <div className="container mt-20">
          <div className="center"><h1>Quản lý công việc</h1></div>
          <div className="row">
            <div className={isDisplayForm===true?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
              {isDisplayForm===true?<TaskForm onReceiveTask={this.onReceiveTask} taskEdit ={taskEdit}/>:""}
            </div>
            <div className={isDisplayForm===true?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button" className="btn btn-warning" onClick={this.onAddTask}> <i className="fa fa-plus"></i> Thêm công việc</button> &nbsp;
              <button type="button" className="btn btn-danger" onClick={this.onGenerateData}>Generate Data</button>

               <div className="row mt-15">
                  <TaskControl />
                  <TaskList tasks={tasks} onDelete ={this.onDelete} onUpdate={this.onUpdate} onFilter ={this.onFilter}/>
               </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

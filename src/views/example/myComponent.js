import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    job: '',
    salary: '',
    arrJob:[
      {id:1, job:'Dev', salary:500+'$'},
      {id:2, job:'Tester', salary:400+'$'}
    ]
  };
  handleOnChangeSalary = (event) =>{
    this.setState({
      salary: event.target.value
    })
  }
  handleOnChangeJob = (event) =>{
    this.setState({
      job: event.target.value
    })
  }
  handleOnClick =() =>{
    const newJob = {
      id: this.state.arrJob.length + 1,
      job: this.state.job,
      salary: this.state.salary + '$'
    };
    this.setState(prevState =>({
      arrJob:[...prevState.arrJob, newJob],
      job:'',
      salary: ''
    }))
  }
  render() {    
    return (
      <>
        <form>
          <label>Job</label><br/>
          <input type="text" value={this.state.job} onChange={(event)=>this.handleOnChangeJob(event)}/><br/>
          <label>Salary</label><br/>
          <input type="text" value={this.state.salary} onChange={(event)=>this.handleOnChangeSalary(event)}/><br/>
          <input type="button" value='Submit' onClick={()=>this.handleOnClick()}/>
        </form>
        <ChildComponent 
          name={this.state.job+' '+this.state.salary}
          arrJob = {this.state.arrJob}
        />
      </>
    );
  }
}

export default MyComponent;

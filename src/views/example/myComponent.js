import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    arrJob:[
      {id:1, job:'Dev', salary:'500$'},
      {id:2, job:'Tester', salary:'400$'}
    ]
  };
  handleOnChangeLastName = (event) =>{
    this.setState({
      lastName: event.target.value
    })
  }
  handleOnChangeFirstName = (event) =>{
    this.setState({
      firstName: event.target.value
    })
  }
  handleOnClick =() =>{
    console.log(this.state)
  }
  render() {
    console.log()
    return (
      <>
        <form>
          <label>First Name</label><br/>
          <input type="text" value={this.state.firstName} onChange={(event)=>this.handleOnChangeFirstName(event)}/><br/>
          <label>Last Name</label><br/>
          <input type="text" value={this.state.lastName} onChange={(event)=>this.handleOnChangeLastName(event)}/><br/>
          <input type="button" value='Submit' onClick={()=>this.handleOnClick()}/>
        </form>
        <ChildComponent 
          name={this.state.firstName+' '+this.state.lastName}
          arrJob = {this.state.arrJob}
        />
      </>
    );
  }
}

export default MyComponent;

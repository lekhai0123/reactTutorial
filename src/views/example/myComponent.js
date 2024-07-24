import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    firstName: '',
    lastName: ''
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
          name={'Khai'}
          age={'20'}
        />
      </>
    );
  }
}

export default MyComponent;

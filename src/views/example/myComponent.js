import React, { Fragment } from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Khải',
        age: '20'
    }
    handleOnChangeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
  render() {
    return (
      <>
      <br></br>
        <input value={this.state.name} type="text" onChange={(event)=> this.handleOnChangeName(event)}></input>
        <h2>my name is {this.state.name}</h2>
        <h2>i'm {this.state.age}</h2>
      </>
    );
  }
}

export default MyComponent;

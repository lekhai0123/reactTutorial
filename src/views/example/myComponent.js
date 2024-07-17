import React, { Fragment } from "react";
class MyComponent extends React.Component {
  state = {
    name: "Khải",
    age: "20",
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnClick = () => {
    alert("hé lô");
  };
  render() {
    return (
      <>
        <div>
          <br></br>
          <input className="1"
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          ></input>
        </div>
        <div>
          <h2>my name is {this.state.name}</h2>
          <h2>i'm {this.state.age}</h2>
        </div>
        <div>
          <input className="2" value="click me" type="button" onClick={() => this.handleOnClick()}/>
        </div>
      </>
    );
  }
}

export default MyComponent;

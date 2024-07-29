import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJob: [
      { id: 1, job: "Dev", salary: 500 + "$" },
      { id: 2, job: "Tester", salary: 400 + "$" },
    ],
  };
  addJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
  };
  render() {
    return (
      <>
        <AddComponent addJob={this.addJob} arrJob={this.state.arrJob} />
        <ChildComponent arrJob={this.state.arrJob} />
      </>
    );
  }
}

export default MyComponent;

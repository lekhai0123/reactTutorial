import React, { Fragment } from "react";
class ChildComponent extends React.Component {

  render() {
    console.log()
    let {name ,age} = this.props;
    return (
      <>
      <div>
        Child Component: {name} - {age}
      </div>
      </>
    );
  }
}

export default ChildComponent;

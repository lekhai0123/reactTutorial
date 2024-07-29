import React from "react";

class AddComponent extends React.Component {
  state = {
    job: "",
    salary: "",
  };
  handleOnChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleOnChangeJob = (event) => {
    this.setState({
      job: event.target.value,
    });
  };

  handleOnClick = () => {
    this.props.addJob({
      id: this.props.arrJob.length + "1",
      job: this.state.job,
      salary: this.state.salary + "$",
    });
    this.setState({
      job: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <form>
          <label>Job</label>
          <br />
          <input
            type="text"
            value={this.state.job}
            onChange={(event) => this.handleOnChangeJob(event)}
          />
          <br />
          <label>Salary</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleOnChangeSalary(event)}
          />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={() => this.handleOnClick()}
          />
          <div>
            {this.state.job && <div>Tên công việc: {this.state.job}</div>}
            {this.state.salary && (
              <div>Lương hàng tháng: {this.state.salary}$</div>
            )}
          </div>
        </form>
      </>
    );
  }
}
export default AddComponent;

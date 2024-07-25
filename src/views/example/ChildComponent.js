import React, { Fragment } from "react";
class ChildComponent extends React.Component {

  render() {
    console.log()
    let {name ,arrJob} = this.props;
    return (
      <>
      <div>
        Thông tin cá nhân: {name}
      </div>
      <div className="job-list">
        {
          arrJob.map((item,idex) => {
            return(
              <div key={item.id}>
                {item.job} - {item.salary}
              </div>
            )
          })
        }
      </div>
      </>
    );
  }
}

export default ChildComponent;

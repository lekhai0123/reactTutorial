import React, { Fragment } from "react";
class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };
  render() {
    console.log("check prop", this.props);
    let { name, arrJob } = this.props;
    let { showJob } = this.state;
    return (
      <>
        <div>Thông tin cá nhân: {name}</div>
        {showJob === false ? (
          <button onClick={() => this.handleShowHide()}>Show</button>
        ) : (
          <>
            <button onClick={() => this.handleShowHide()}>Hide</button>
            <div className="job-list">
              {arrJob.map((item, idex) => {
                return (
                  <div key={item.id}>
                    {item.job} - {item.salary}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) =>{
//   console.log('check props', props)
//     let {name ,arrJob} = props;
//         return (
//           <>
//           <div>
//             Thông tin công việc: {name}
//           </div>
//           <div className="job-list">
//             {
//               arrJob.map((item,idex) => {
//                 return(
//                   <div key={item.id}>
//                     {item.job} - {item.salary}
//                   </div>
//                 )
//               })
//             }
//           </div>
//           </>
//         );
// }

export default ChildComponent;

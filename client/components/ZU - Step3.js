// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Form, Input, Dropdown, Select, Button } from "semantic-ui-react";
// import { addFormdetails } from "../store/form";

// class IncorporationForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       children: [{ name: "" }],
//     };
//     this.nextStep = this.nextStep.bind(this);
//     this.previousStep = this.previousStep.bind(this);
//   }

//   nextStep(event) {
//     event.preventDefault();
//     this.props.nextStep();
//   }

//   previousStep(event) {
//     event.preventDefault();
//     this.props.previousStep();
//   }

//   handleNameChange = evt => {
//     this.setState({ name: evt.target.value });
//   };

//   handleShareholderNameChange = idx => evt => {
//     const newchildren = this.state.children.map((shareholder, sidx) => {
//       if (idx !== sidx) return shareholder;
//       return { ...shareholder, name: evt.target.value };
//     });

//     this.setState({ children: newchildren });
//   };

//   handleAddChildren = () => {
//     this.setState({
//       children: this.state.children.concat([{ name: "" }]),
//     });
//   };

//   handleRemoveChildren = idx => () => {
//     this.setState({
//       children: this.state.children.filter((s, sidx) => idx !== sidx),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>
//           We need some information to calculate the chance that your portfolio
//           will support your spending goals throughout retirement. First, let's
//           establish the timeline for your plan.
//         </h2>
//         <div>
//           <Form>
//             {this.state.children.map((child, idx) => (
//               <Form.Group>
//                 <Form.Field width={16}>
//                   <Input
//                     type="text"
//                     placeholder={`child ${idx + 1} name`}
//                     value={child.name}
//                     onChange={this.handleShareholderNameChange(idx)}
//                   />
//                 </Form.Field>
//                 <Form.Field width={8}>
//                   <Input
//                     type="text"
//                     placeholder={`child ${idx + 1} age`}
//                     value={child.name}
//                     onChange={this.handleShareholderNameChange(idx)}
//                   />
//                 </Form.Field>

//                 <Form.Field width={2}>
//                   <Button
//                     onClick={this.handleRemoveChildren(idx)}
//                     className="small"
//                   >
//                     -
//                   </Button>
//                 </Form.Field>
//                 <hr />
//               </Form.Group>
//             ))}
//           </Form>
//           <div>
//             <Button onClick={this.handleAddChildren} className="small">
//               Add Children
//             </Button>
//           </div>

//           <Button positive onClick={this.previousStep}>
//             Go Back
//           </Button>
//           <Button positive onClick={this.nextStep}>
//             Save & Continue
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     account: state.accounts.accountInfo,
//     transaction: state.transactions.transaction,
//     form: state.form,
//   };
// };

// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {
//     handleChange(event) {
//       dispatch(addFormdetails({ [event.target.name]: event.target.value }));
//     },
//   };
// };

// const Step3Container = connect(mapStateToProps, mapDispatchToProps)(
//   IncorporationForm
// );

// export default Step3Container;

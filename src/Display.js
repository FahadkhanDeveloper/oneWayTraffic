import { Component } from "react";
import Button from "./Button";
export default class Display extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
  }
  // it is must that we will create arrow function in class because there is alot of problems in
  // normal function in class
  changeNumber = (n) => {
    this.setState({
      number: n,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        {/* here we render button class  */}
        <Button change={this.changeNumber}></Button>
        {/* change is props name */}
      </div>
    );
  }
}

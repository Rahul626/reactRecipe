import React, { Component } from "react";

class SignIn extends Component {
  formHandler = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="firstname" ref="name" />
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;

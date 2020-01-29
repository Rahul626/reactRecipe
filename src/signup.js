import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      email: event.target.value,
      password: event.target.value
    });
  }

  handleSubmit(event) {
    alert(this.state.name);

    alert(this.state.password, this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            email={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          email:
          <input
            type="text"
            email={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          password:
          <input
            type="text"
            email={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;

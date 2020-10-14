import React, { Component } from "react";
import { connect } from "react-redux";
class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      text: "",
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input
              value={text}
              name="text"
              type="text"
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);

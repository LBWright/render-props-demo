import React, { Component } from 'react';

class NewCharacterForm extends Component {
  state = {
    name: '',
    description: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const character = {
      name: this.state.name,
      description: this.state.description,
      id: Date.now()
    };
    this.props.addCharacter(character);
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          onChange={this.handleInputChange}
          type="text"
          name="name"
        />
        <input
          value={this.state.description}
          onChange={this.handleInputChange}
          name="description"
          type="text"
        />
        <button className="btn">Submit</button>
      </form>
    );
  }
}

export default NewCharacterForm;

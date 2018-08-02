import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Characters extends Component {
  // this component will act as our controller

  state = {
    characters: [],
    loading: true
  };

  static propTypes = {
    children: PropTypes.func.isRequired
  };

  addCharacter = character => {
    axios.post('http://localhost:3004/characters/', character).then(res => {
      this.setState(prevState => {
        return {
          characters: prevState.characters.concat(character)
        };
      });
    });
  };

  fetchCharacters = () => {
    axios.get('http://localhost:3004/characters/').then(res => {
      console.log(res.data);
      this.setState({ characters: res.data, loading: false });
    });
  };

  componentDidMount() {
    this.fetchCharacters();
  }
  render() {
    const characters = {
      characters: this.state.characters,
      addCharacter: this.addCharacter
    };
    if (this.state.loading) return <h2>Loading...</h2>;
    return this.props.children(characters);
  }
}

export default Characters;

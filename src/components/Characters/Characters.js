import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Characters extends Component {
  // this component will act as our controller

  state = {
    characters: [],
    loading: true
  };

  // proptypes is important for this method
  // DO NOT FORGET PROPTYPES

  // we make our post request to the server
  addCharacter = character => {
    axios.post('http://localhost:3004/characters/', character).then(res => {
      this.setState(prevState => {
        // any time we refer to previous state to set the current state, we always use the setState callback
        return {
          characters: prevState.characters.concat(character)
        };
      });
    });
  };

  // we make our fetch request to the server
  fetchCharacters = () => {
    axios.get('http://localhost:3004/characters/').then(res => {
      console.log(res.data);
      this.setState({ characters: res.data, loading: false });
    });
  };

  // on mounting, we fetch our data
  componentDidMount() {
    this.fetchCharacters();
  }
  render() {
    return <div>From characters</div>;
  }
}

export default Characters;

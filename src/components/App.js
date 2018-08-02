import React, { Component, Fragment } from 'react';
import Characters, { CharacterList, NewCharacterForm } from './Characters';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Characters>
          {({ characters, addCharacter }) => (
            <Fragment>
              <NewCharacterForm addCharacter={addCharacter} />
              <CharacterList characters={characters} />
            </Fragment>
          )}
        </Characters>
      </div>
    );
  }
}

export default App;

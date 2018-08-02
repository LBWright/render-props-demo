import React from 'react';
import CharacterItem from './CharacterItem';

// we set up a basic CharacterList Component that maps through values and
// passes those values to a single display component

const CharacterList = ({ characters }) => {
  return (
    <div>
      {characters.map(character => (
        <CharacterItem key={character.id} {...character} />
      ))}
    </div>
  );
};

export default CharacterList;

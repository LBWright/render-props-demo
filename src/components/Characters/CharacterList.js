import React from 'react';
import CharacterItem from './CharacterItem';

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

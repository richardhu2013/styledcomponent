import React from 'react';
import Tile from './tile.jpg';
import Logo from './logo.png';
import Composite from './Composite';

export default props => {

  return (
    <Composite text="Home and Away"
    backgroundImage={Tile}
    logoImage={Logo} />
  );
}

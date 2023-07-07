import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div id='planets'>
        <Title headline="Planetas" />
        <div id='solar-system'>
        {Planets.map((planeta) => (<PlanetCard
          key={ `${planeta.name}1` }
          planetName={ planeta.name }
          planetImage={ planeta.image }
        />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;

import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((missao) => (<MissionCard
          key={ `${missao.name}1` }
          name={ missao.name }
          year={ missao.year }
          country={ missao.country }
          destination={ missao.destination }
        />))}
      </div>
    );
  }
}

export default Missions;

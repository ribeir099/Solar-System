import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div id="missions">
        <Title headline="Missões" />
        <div id="missions-cards">
          {missions.map((missao) => (<MissionCard
            key={ `${missao.name}1` }
            name={ missao.name }
            year={ missao.year }
            country={ missao.country }
            destination={ missao.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;

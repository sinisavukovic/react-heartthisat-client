
import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import NavContainer from './NavContainer';
import PlayerContainer from './PlayerContainer';
import routes from '../config/routes';

const RootContainer = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <NavContainer />
        { routes }
        <PlayerContainer />
      </div> 
    </ConnectedRouter>
  )
}

RootContainer.propTypes = {
  history: PropTypes.object.isRequired,
}

export default RootContainer


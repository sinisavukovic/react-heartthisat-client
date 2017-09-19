import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({
  message
}) => {
  return (
    <div className="wrapper not-found">
    {message} <br />
    <Link to='/'>Go home </Link>
    </div>
  )
}

NotFound.propTypes = {
  message: PropTypes.string.isRequired,
}

export default NotFound;
import PropTypes from 'prop-types';
import React from 'react';

const Loader = ({ children, className, isLoading }) => {
  if (isLoading) {
    return (
      <div className={`loader ${className}`}>
        <div className="loader-rects">
          <div className="loader-rect loader-rect--1" />
          <div className="loader-rect loader-rect--2" />
          <div className="loader-rect loader-rect--3" />
          <div className="loader-rect loader-rect--4" />
          <div className="loader-rect loader-rect--5" />
        </div>
      </div>
    );
  }

  return children;
};

Loader.defaultProps = {
  children: null,
  className: '',
};

Loader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;

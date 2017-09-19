
/* global document */
/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
      const { args, onScroll } = this.props;
      onScroll(...args);
    }
  }

  render() {
    const { children, className } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

InfiniteScroll.defaultProps = {
  args: [],
  className: '',
};

InfiniteScroll.propTypes = {
  args: PropTypes.arrayOf(PropTypes.any),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onScroll: PropTypes.func.isRequired,
};

export default InfiniteScroll;

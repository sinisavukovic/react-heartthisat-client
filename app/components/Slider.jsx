/* global document */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const offsetLeft = (element) => {
  let el = element;
  let x = el.offsetLeft;

  while (el.offsetParent) {
    x += el.offsetParent.offsetLeft;
    el = el.offsetParent;
  }

  return x;
};

const prevent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

class Slider extends Component {
  constructor() {
    super();
    this.domNode = null;
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  onClick = (e) =>  {
    const { max, onChange } = this.props;
    const percent = (e.clientX - offsetLeft(e.currentTarget)) / e.currentTarget.offsetWidth;
    onChange(percent * max);
  }

  onMouseDown = () => {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (e) => {
    const { domNode, props } = this;
    const { max, onChange } = props;

    const diff = e.clientX - offsetLeft(domNode);
    const percent = Math.min(Math.max(diff / domNode.offsetWidth, 0), 1);
    onChange(percent * max);
  }

  onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  render() {
    const { className, max, value } = this.props;
    const width = `${(value / max) * 100}%`;

    return (
      <div
        className={`slider ${className}`}
        onClick={this.onClick}
        ref={(node) => { this.domNode = node; }}
        role="button"
        tabIndex="0"
      >
        <div className="slider-bar">
          {max > 0
            ? (
              <div className="slider-bar-fill" style={{ width }}>
                <div
                  className="slider-handle"
                  onClick={prevent}
                  onMouseDown={this.onMouseDown}
                  role="button"
                  tabIndex="0"
                />
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

Slider.defaultProps = {
  className: '',
};

Slider.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Slider;

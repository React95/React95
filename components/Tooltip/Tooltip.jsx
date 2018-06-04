import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Tip = styled.div`
  background: radial-gradient(#ff0 20%, transparent 20%) 0 0,
    radial-gradient(#ff0 20%, transparent 20%) 4px 4px,
    radial-gradient(rgba(255, 255, 255, 0.1) 20%, transparent 25%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 20%, transparent 25%) 3px 4px;
  background-size: 7px 7px;
  background-color: #fff;
  border: 1px solid #000;
  padding-right: 5px;
  padding-left: 5px;
  position: absolute;
  top: -18px;
  text-align: center;
  z-index: 100;
  opacity: ${({ show }) => (show ? '1' : '0')};
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: default;
  white-space: nowrap;
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false, delay: null };
  }

  handleEnter = () => {
    const delay = setTimeout(() => {
      this.setState({ show: true });
    }, this.props.delay);

    this.setState({ delay });
  };

  handleLeave = () => {
    const { delay } = this.state;
    clearTimeout(delay);

    this.setState({ delay, show: false });
  };

  render() {
    const { children, text } = this.props;

    const { show } = this.state;

    return (
      <Wrapper onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <Tip show={show}>{text}</Tip>
        {children}
      </Wrapper>
    );
  }
}

function formatDate(date) {
  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return (
    day.toString().padStart(2, '0') + ' ' + monthNames[monthIndex] + ' ' + year
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  delay: PropTypes.number,
};

Tooltip.defaultProps = {
  delay: 1000,
  text: formatDate(new Date()),
};

export default Tooltip;

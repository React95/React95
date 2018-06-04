import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import { skins, placement } from './options';

const tipSkin = ({ skin }) => skins[skin] || skins.info;

const Tip = styled.div`
  background: radial-gradient(#ff0 15%, transparent 15%) 0 0,
    radial-gradient(#ff0 15%, transparent 15%) 16px 16px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 16px 17px;
  background-color: #fff;
  border: 1px solid #000;
  font-size: 14px;
  font-weight: bold;
  opacity: ${props => (props.show ? '1' : '0')};
  padding: 5px 20px;
  position: absolute;
  text-align: center;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  z-index: 100;
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

    this.state = { show: false, width: null, height: null };
  }

  componentDidMount() {
    this.measure();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.text !== nextProps.text ||
      this.state.show !== nextState.show ||
      this.state.width !== nextState.width ||
      this.state.height !== nextState.height
    );
  }

  componentDidUpdate() {
    this.measure();
  }

  measure() {
    const { clientWidth, clientHeight } = this.tip;

    this.setState({ width: clientWidth, height: clientHeight });
  }

  handleEnter = () => {
    this.setState({ show: true });
  };

  handleLeave = () => {
    this.setState({ show: false });
  };

  render() {
    const { children, text } = this.props;

    const { width, height, show } = this.state;

    return (
      <Wrapper onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <Tip
          skin={skin}
          innerRef={tip => {
            this.tip = tip;
          }}
          width={width}
          height={height}
          show={show}
        >
          {text}
        </Tip>
        {children}
      </Wrapper>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

Tooltip.defaultProps = {
  text: 'Tooltip',
};

export default Tooltip;

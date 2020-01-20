import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@xstyled/styled-components";

import Tab from "./Tab";
import Frame from "../Frame";

const Navbar = styled(Frame)`
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  box-shadow: none;
  background-color: unset;
`;

const NavContainer = styled(Frame)`
  padding: 12;
  box-shadow: out;
`;

NavContainer.displayName = "NavContainer";

const If = ({ condition, children }) => condition && children;

const Tabs = ({ children, style, defaultActiveTab, onChange, ...rest }) => {
  const firstTab = React.Children.toArray(children)[0];
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || firstTab.props.title
  );

  return (
    <>
      <Navbar style={style} {...rest} as="ol">
        {React.Children.map(children, child => {
          const { title, disabled } = child.props;

          return (
            <Tab
              key={title}
              title={title}
              activeTab={activeTab}
              onClick={
                !disabled &&
                (() => {
                  if (onChange) {
                    onChange(title);
                  }
                  setActiveTab(title);
                })
              }
            />
          );
        })}
      </Navbar>

      <NavContainer style={style}>
        {React.Children.map(children, child => (
          <If condition={child.props.title === activeTab}>
            {child.props.children}
          </If>
        ))}
      </NavContainer>
    </>
  );
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  defaultActiveTab: PropTypes.string,
  onChange: PropTypes.func
};

Tabs.defaultProps = {
  children: [],
  style: {},
  defaultActiveTab: undefined,
  onChange: undefined
};

export default Tabs;

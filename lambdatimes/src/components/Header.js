import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const HeaderDiv = styled.div`
  background: lightBlue;
  width: 100%;
  text-align: center;
  &:hover {
    background: pink;
    color: white;
  }
`;

const Header = () => {
  return (
    <HeaderDiv>
      <span className="date">MARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </HeaderDiv>
  );
};

export default Header;

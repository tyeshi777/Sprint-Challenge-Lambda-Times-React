import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const HeaderDiv = styled.div`
  background: lightBlue;
  width: 100%;
  height: 15d0px;
  padding-top: 10px;
  text-align: center;
  &:hover {
    background: pink;
    color: white;
  }
`;
const DateSpan = styled.h4`
  color: gray;
  float: left;
  margin-left: 20px;
  padding-top: 80px;
`;

const SpanTemp = styled.h4`
  color: gray;
  text-align: right;
  margin-right: 20px;
`;
const Header = () => {
  return (
    <HeaderDiv>
      <DateSpan>MARCH 32, 2018</DateSpan>
      <h1>Lambda Times</h1>
      <SpanTemp>98°</SpanTemp>
    </HeaderDiv>
  );
};

export default Header;

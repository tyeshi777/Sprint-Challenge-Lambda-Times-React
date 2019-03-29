import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const TopBarDiv = styled.div`
  color: white;
  background: lightGreen;
  width: 100%;
  position: fixed;
  &:hover {
    background: white;
    color: black;
  }
`;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopBarContainerLeft = styled.div`
  span {
    margin-left: 20px;
  }
`;

const TopBarContainerCentre = styled.div`
  span {
    margin-left: 20px;
  }
`;

const TopBarContainerRight = styled.div`
  margin-right: 30px;
`;
const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <TopBarContainerLeft>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </TopBarContainerLeft>
        <TopBarContainerCentre>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </TopBarContainerCentre>
        <TopBarContainerRight>
          <span>LOG IN</span>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarDiv>
  );
};

export default TopBar;

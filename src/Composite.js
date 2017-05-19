import React from 'react';
import styled from 'styled-components';

const BackgroundImage = styled.img `
  width : 100%;
  display : block;
  height : auto;
`;

const BottomBar = styled.div `
  background : rgba(0,0,0,0.3);
  padding : 12px;
  position : absolute;
  bottom : 0;
  width : 100%;
  box-sizing : border-box;
  align-items: center;
  display : flex;
`;

const Text = styled.p `
  margin : 0;
  color : white;
  flex : 1;
  font-family : sans-serif;
  font-size : 20px;
`;

const Logo = styled.img `
  flex : 0 0 30px;
  height : 30px;
  margin : 0 20px;
`;

// Create a <Wrapper> react component that renders a <div> with
// some padding and a papayawhip background
const Wrapper = styled.div `
  width : 100%;
  max-width: 300px;
  margin : auto;
  background : black;
  padding : 15px;
`;

const InnerWrapper = styled.div `
  position: relative;
`;

export default props => {
  // Render these styled components like normal react components. They will pass on all props and work
  // like normal react components – except they're styled!
  const {
    backgroundImage,
    logoImage,
    text
  } = props;
  return (
    <Wrapper>
      <InnerWrapper>
        <BackgroundImage src={backgroundImage}/>
        <BottomBar>
          <Logo src={logoImage}/>
          <Text>{text}</Text>
        </BottomBar>
      </InnerWrapper>
    </Wrapper>
  );
}

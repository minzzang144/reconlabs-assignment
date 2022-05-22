import React from 'react';
import styled from 'styled-components';
import { Image } from './components/Image';

function App() {
  return (
    <FlexColumn>
      <FlexCenter>
        <Logo src="/logo.png" alt="Logo" width="100rem" />
      </FlexCenter>
      <FlexCenter></FlexCenter>
    </FlexColumn>
  );
}

export default App;

const FlexCenter = styled.div`
  display: flex;
  margin: 0 auto;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled(Image)`
  margin: 0.8rem 0 1.2rem 0;
`;

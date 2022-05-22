import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import View3D, { LoadingBar } from '@egjs/view3d';
import '@egjs/view3d/css/view3d-bundle.min.css';
import { Image } from './components/Image';

function App() {
  useEffect(() => {
    const glbs = ['/Chair.glb', '/cube.glb', '/Mixer.glb', 'ToyCar.glb'];
    const random = Math.floor(Math.random() * glbs.length);

    new View3D('#wrapper-el', {
      src: glbs[random],
      plugins: [new LoadingBar()],
    });
  }, []);

  return (
    <FlexColumn>
      <FlexCenter>
        <Logo src="/logo.png" alt="Logo" width="100rem" />
      </FlexCenter>
      <Background>
        <ThreeDimentionContainer>
          <>
            <AiOutlineExclamationCircle style={{ alignSelf: 'end', cursor: 'pointer' }} />
            <Viewer id="wrapper-el">
              <canvas className="view3d-canvas"></canvas>
            </Viewer>
          </>
        </ThreeDimentionContainer>
      </Background>
    </FlexColumn>
  );
}

export default App;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled(Image)`
  margin: 0.8rem 0 1.2rem 0;
`;

const Background = styled(FlexCenter)`
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 70vh;
  align-items: center;
`;

const ThreeDimentionContainer = styled(FlexColumn)`
  width: 50%;
  height: 70%;
`;

const Viewer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

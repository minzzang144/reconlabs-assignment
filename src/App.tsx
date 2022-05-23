import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import View3D, { LoadingBar } from '@egjs/view3d';
import '@egjs/view3d/css/view3d-bundle.min.css';
import { Image } from './components/Image';
import { Button } from './components/Button';

function App() {
  const [clicking, useClicking] = useState<boolean>(false);

  function booleanController(stating: React.Dispatch<React.SetStateAction<boolean>>) {
    stating((current) => !current);
  }

  async function codeBtnClick() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      alert('클립보드에 복사되었습니다.');
    } catch (error) {
      alert('복사 실패 😥');
    }
  }

  useEffect(() => {
    const glbs = ['/Chair.glb', '/cube.glb', '/Mixer.glb', 'ToyCar.glb'];
    const random = Math.floor(Math.random() * glbs.length);

    new View3D('#wrapper-el', {
      src: glbs[random],
      plugins: [new LoadingBar()],
    });
  }, []);

  return (
    <>
      <FlexColumn>
        <FlexHorizonCenter>
          <Logo src="/logo.png" alt="Logo" width="100rem" />
        </FlexHorizonCenter>
        <Background>
          <ThreeDimentionContainer>
            <>
              <AiOutlineExclamationCircle
                style={{ alignSelf: 'end', cursor: 'pointer', marginBottom: '.5rem' }}
                onClick={() => booleanController(useClicking)}
              />
              <Viewer id="wrapper-el">
                <canvas className="view3d-canvas"></canvas>
              </Viewer>
              <Button
                onClick={codeBtnClick}
                bgColor="blue"
                color="white"
                margin={['1rem', '0', '0', '0']}
                padding={['.2rem']}
                borderRadius="3px"
                width="7rem"
              >
                코드 복사하기
              </Button>
            </>
          </ThreeDimentionContainer>
        </Background>
      </FlexColumn>
      {clicking ? (
        <Modal onClick={() => booleanController(useClicking)}>
          <Image src="/modal.png" alt="Modal" />
        </Modal>
      ) : null}
    </>
  );
}

export default App;

const Flex = styled.div`
  display: flex;
`;

const FlexHorizonCenter = styled(Flex)`
  justify-content: center;
`;

const FlexCenter = styled(FlexHorizonCenter)`
  align-items: center;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Modal = styled(FlexCenter)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.modal};
`;

const Logo = styled(Image)`
  margin: 0.8rem 0 1.2rem 0;
`;

const Background = styled(FlexCenter)`
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 80vh;
  align-items: center;
`;

const ThreeDimentionContainer = styled(FlexColumn)`
  width: 50%;
  height: 70%;
  align-items: center;
`;

const Viewer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

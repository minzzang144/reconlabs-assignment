import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { QRCodeSVG } from 'qrcode.react';
import View3D, { LoadingBar } from '@egjs/view3d';
import '@egjs/view3d/css/view3d-bundle.min.css';
import { Image } from './components/Image';
import { Button } from './components/Button';
import { Span } from './components/Span';

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

  function downloadQrcode() {
    const svg = document.querySelector('#qrcode')!;
    const svgXML = new XMLSerializer().serializeToString(svg);
    const dataUrl = 'data:image/svg,' + encodeURIComponent(svgXML);

    const anchor = document.createElement('a');
    anchor.href = dataUrl;
    anchor.download = `qr-code.svg`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
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
      <QrcodeContainer>
        <Span fontSize="lg" fontWeight="bold" margin={['1.2rem', '0', '0.8rem', '0']}>
          스마트폰을 통해 스캔 해주세요.
        </Span>
        <QRCodeSVG value="https://plicar.io/" id="qrcode" />
        <Span fontSize="md" fontWeight="normal" margin={['1rem', '0', '.3rem', '0']}>
          스마트폰 기본 카메라 앱에서
        </Span>
        <Span fontSize="md" fontWeight="normal" margin={['.3rem', '0', '2rem', '0']}>
          아래의 QR을 비춘 후 뜨는 링크를 눌러주세요
        </Span>
        <Button
          onClick={downloadQrcode}
          bgColor="blue"
          color="white"
          margin={['1rem', '0']}
          padding={['.2rem']}
          borderRadius="3px"
          width="10rem"
        >
          qr코드 이미지 다운받기
        </Button>
        <Span fontSize="md" fontWeight="normal" margin={['.3rem', '0', '2rem', '0']}>
          AR기능은 현재 아래의 기기에서만 정상 작동 합니다.
        </Span>
        <Span fontSize="md" fontWeight="normal" margin={['.3rem', '0', '.3rem', '0']}>
          iPhone: iOS 12이상
        </Span>
        <Span fontSize="md" fontWeight="normal" margin={['.3rem', '0', '2rem', '0']}>
          Android: 8.0+ 이상 ARCore 1.9 지원기기
        </Span>
      </QrcodeContainer>
      <FlexHorizonCenter>
        <Span fontSize="md" fontWeight="normal" margin={['.8rem', '0', '3rem', '0']}>
          Copyright 2022. RECON Labs Inc. All rights reserved.
        </Span>
      </FlexHorizonCenter>
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

const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

const FlexColumnCenter = styled(FlexColumn)`
  align-items: center;
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
  ${({ theme }) => theme.media.tablet`
    width: 90%;
  `}
`;

const Viewer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;

const QrcodeContainer = styled(FlexColumnCenter)`
  padding: 5rem 0 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

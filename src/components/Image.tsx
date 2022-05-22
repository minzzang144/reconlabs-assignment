import React from 'react';
import styled from 'styled-components';
import { ColorType } from '../theme';
import { colorStyles } from '../theme/colorStyles';

export interface ImageProps {
  width?: string;
  height?: string;
  bgColor?: ColorType;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Image: React.FC<ImageProps> = ({ children, onClick, ...rest }) => {
  return (
    <Wrapper onClick={onClick ? onClick : undefined} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.image`
  ${colorStyles}
`;

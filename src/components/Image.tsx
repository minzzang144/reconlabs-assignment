import React from 'react';
import styled, { css } from 'styled-components';
import { ColorType } from '../theme';

type BgcolorType = Pick<ImageProps, 'bgColor'>;

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

const bgStyles = css<BgcolorType>`
  ${({ bgColor }) =>
    bgColor === 'modal' &&
    css`
      background-color: ${({ theme }) => theme.colors.modal};
    `}
`;

const Wrapper = styled.image`
  ${bgStyles}
`;

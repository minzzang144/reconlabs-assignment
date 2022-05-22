import React from 'react';
import styled from 'styled-components';
import { ColorType } from '../theme';
import { colorStyles } from '../theme/colorStyles';
import { borderStyles, marginStyles, paddingStyles } from '../theme/boxModelStyle';
import { LengthStyles } from '../theme/lengthStyle';

interface ButtonProps {
  width?: string;
  height?: string;
  padding?: string[];
  margin?: string[];
  borderRadius?: string;
  color?: ColorType;
  bgColor?: ColorType;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <Wrapper onClick={onClick ? onClick : undefined} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 0;
  cursor: pointer;
  ${colorStyles}
  ${LengthStyles}
  ${marginStyles}
  ${paddingStyles}
  ${borderStyles}
`;

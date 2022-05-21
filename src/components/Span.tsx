import React from 'react';
import styled from 'styled-components';
import { SizeType } from '../theme';
import { sizeStyles } from '../theme/sizeStyle';

export interface SpanProps {
  fontWeight?: string;
  fontSize?: SizeType;
  children?: React.ReactNode;
}

export const Span: React.FC<SpanProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  display: inline-block;
  ${sizeStyles}
`;

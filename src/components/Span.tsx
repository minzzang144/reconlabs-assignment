import React from 'react';
import styled from 'styled-components';
import { SizeType } from '../theme';
import { marginStyles } from '../theme/boxModelStyle';
import { sizeStyles } from '../theme/sizeStyle';
import { weightStyles } from '../theme/weightStyle';

export interface SpanProps {
  fontWeight?: string;
  fontSize?: SizeType;
  margin?: string[];
  children?: React.ReactNode;
}

export const Span: React.FC<SpanProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  display: inline-block;
  ${sizeStyles}
  ${weightStyles}
  ${marginStyles}
`;

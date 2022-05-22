import { css } from 'styled-components';
import { ColorType } from '.';

type ColorStyle = {
  bgColor?: ColorType;
  color?: ColorType;
};

export const colorStyles = css<ColorStyle>`
  ${({ bgColor }) =>
    bgColor === 'blue' &&
    css`
      background-color: ${({ theme }) => theme.colors.blue};
    `}
  ${({ bgColor }) =>
    bgColor === 'modal' &&
    css`
      background-color: ${({ theme }) => theme.colors.modal};
    `}
  ${({ color }) =>
    color === 'white' &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

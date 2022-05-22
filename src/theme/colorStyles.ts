import { css } from 'styled-components';

type ColorStyle = {
  bgColor?: 'modal';
};

export const colorStyles = css<ColorStyle>`
  ${({ bgColor }) =>
    bgColor === 'modal' &&
    css`
      background-color: ${({ theme }) => theme.colors.modal};
    `}
`;

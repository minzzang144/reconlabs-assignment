import { css } from 'styled-components';

type LengthStyle = {
  width?: string;
  height?: string;
};

export const LengthStyles = css<LengthStyle>`
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;

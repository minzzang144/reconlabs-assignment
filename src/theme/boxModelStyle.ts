import { css } from 'styled-components';

type PaddingStyle = {
  padding?: string[];
};

type MarginStyle = {
  margin?: string[];
};

type BorderStyle = {
  border?: string;
  borderRadius?: string;
};

export const paddingStyles = css<PaddingStyle>`
  ${({ padding }) =>
    padding &&
    padding.length === 1 &&
    css`
      padding: 0;
      padding: ${padding[0]};
    `}
  ${({ padding }) =>
    padding &&
    padding.length === 2 &&
    css`
      padding: 0;
      padding: ${padding[0]} ${padding[1]};
    `}
  ${({ padding }) =>
    padding &&
    padding.length === 3 &&
    css`
      padding: 0;
      padding: ${padding[0]} ${padding[1]} ${padding[2]};
    `}
  ${({ padding }) =>
    padding &&
    padding.length === 4 &&
    css`
      padding: 0;
      padding: ${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]};
    `}
`;

export const marginStyles = css<MarginStyle>`
  ${({ margin }) =>
    margin &&
    margin.length === 1 &&
    css`
      margin: 0;
      margin: ${margin[0]};
    `}
  ${({ margin }) =>
    margin &&
    margin.length === 2 &&
    css`
      margin: 0;
      margin: ${margin[0]} ${margin[1]};
    `}
  ${({ margin }) =>
    margin &&
    margin.length === 3 &&
    css`
      margin: 0;
      margin: ${margin[0]} ${margin[1]} ${margin[2]};
    `}
  ${({ margin }) =>
    margin &&
    margin.length === 4 &&
    css`
      margin: 0;
      margin: ${margin[0]} ${margin[1]} ${margin[2]} ${margin[3]};
    `}
`;

export const borderStyles = css<BorderStyle>`
  ${({ border }) =>
    border &&
    css`
      border: ${border};
    `}
  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `}
`;

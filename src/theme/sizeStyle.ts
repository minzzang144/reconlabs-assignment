import { css } from 'styled-components';

type SizeStyle = {
  fontSize?: 'sm' | 'md' | 'lg';
};

export const sizeStyles = css<SizeStyle>`
  ${({ fontSize }) =>
    fontSize === 'sm' &&
    css`
      font-size: ${({ theme }) => theme.sizes.sm};
    `}
  ${({ fontSize }) =>
    fontSize === 'md' &&
    css`
      font-size: ${({ theme }) => theme.sizes.md};
    `}
      ${({ fontSize }) =>
    fontSize === 'lg' &&
    css`
      font-size: ${({ theme }) => theme.sizes.lg};
    `}
`;

import { css } from 'styled-components';

type WeightStyle = {
  fontWeight?: 'normal' | 'bold';
};

export const weightStyles = css<WeightStyle>`
  ${({ fontWeight }) =>
    fontWeight === 'normal' &&
    css`
      font-weight: ${({ theme }) => theme.weight.normal};
    `}
  ${({ fontWeight }) =>
    fontWeight === 'bold' &&
    css`
      font-weight: ${({ theme }) => theme.weight.bold};
    `}
`;

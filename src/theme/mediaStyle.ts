import { CSSProp, css } from 'styled-components';

type MediaQueryProps = {
  tablet: {
    width: number;
    height: number;
  };
};

const sizes: MediaQueryProps = {
  tablet: {
    width: 768,
    height: 1024,
  },
};

type BackQuoteArgs = string[];

const media = {
  tablet: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.tablet.width}px) {
        ${css(literals, ...args)}
      }
    `,
} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp>;

export default media;

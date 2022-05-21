import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      modal: string;
    };
    media: Record<'tablet', (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp<DefaultTheme>>;
    sizes: {
      sm: string;
      md: string;
      lg: string;
    };
    weight: {
      normal: string;
      bold: string;
    };
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

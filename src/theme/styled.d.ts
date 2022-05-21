import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      modal: string;
    };
    media: Record<'tablet', (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp<DefaultTheme>>;
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

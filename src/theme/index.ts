import { DefaultTheme } from 'styled-components';
import media from './media';

const colors = {
  modal: 'rgba(0, 0, 0, 0.7)',
};

const theme: DefaultTheme = {
  colors,
  media,
};

export default theme;
export type ColorType = keyof typeof colors;

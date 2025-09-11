import { createStitches } from '@stitches/react';

export const { styled, css, theme, globalCss } = createStitches({
  theme: { colors: { text: '#fff' } }
});

export const globalStyles = globalCss({
  'a::after, a:hover::after': {
    content: '""',
    display: 'block',
    width: 0,
    height: 0,
    background: 'none',
  }
});

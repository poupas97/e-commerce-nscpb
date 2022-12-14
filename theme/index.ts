import { createStitches } from "@stitches/react";

const { styled, keyframes } = createStitches({
  theme: {
    colors: {
      green: 'green',
      green100: '#4cbb17',

      gray: 'gray',
      gray100: '#f3f3f3',
    },

    space: {
      '5': '5px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
      '30': '30px',
      '50': '50px',
    },

    sizes: {
      '30': '30px',
    }
  },
  utils: {
    marginHorizontal: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginVertical: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),

    paddingVertical: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    paddingHorizontal: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
  },
  media: {
    initial: '(min-width: 1px)',
    xs: '(min-width: 320px)',
    sm: '(min-width: 481px)',
    md: '(min-width: 769px)',
    lg: '(min-width: 1025px)',
    xl: '(min-width: 1201px)',
  },
});

export { styled, keyframes }

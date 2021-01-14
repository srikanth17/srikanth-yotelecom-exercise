const theme = {
  palette: {
    background: {
      body: '#E5E5E5',
      main: '#FFFFFF',
      success: '#48B742',
    },
    text: {
      primary: '#8B8B8B',
      secondary: '#EA5454',
      checkbox: '#666666',
      registration: '#4D4D4D',
      customer: '#000000',
    },
    button: {
      save: '#FECC33',
      homepage: '#FF5558',
      main: '#FFFFFF',
    },
    border: '#a2a2a2',
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  typography: {
    body: {
      'font-weight': '300',
      'font-size': '16px',
    },
    button: {
      'font-weight': '500',
      'font-size': '25px',
    },
  },
};

export default theme;

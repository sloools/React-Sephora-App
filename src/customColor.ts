const color = {
    black: '#1e222a',
    white: '#ffffff',
    leafGreen: '#bed730',
    green: '#00b52e',
    teal: '#0ace9a',
    cyan: '#00c0ff',
    blue: '#0062ff',
    indigo: '#673eff',
    purple: '#7e3dd9',
    pink: '#ff3582',
    red: '#ea1919',
    orange: '#fd8f03',
    yellow: '#ffc70e',
    neutrals: '#b5bccd',
    // grey: '#f9fafb',

    grey50: '#f9fafb',
    grey100: '#f6f7fb',
    grey200: '#eef1f7',
    grey300: '#e6eaf4',
    grey400: '#cbd2e3',
    grey500: '#b5bccd',
    grey600: '#858da3',
    grey700: '#686c7e',
    grey800: '#363a4c',
    grey900: '#171f31',
  
    /* background */
    primaryColor: "#0062ff", // blue
    secondaryColor: '#858da3',// grey600
    errorColor: '#ea1919', // red
    warningColor: '#fd8f03', // orange
    infoColor: '#673eff', // indigo
    successColor: '#00b52e', // green
    disabledColor: '#eef1f7', // grey200
  
    /* text */
    primaryText: '#1e222a', // black
    secondaryText: '#686c7e', // grey700
    errorText: '#ea1919', // red
    warningText: '#fd8f03', // orange
    infoText: '#673eff', // indigo
    successText: '#00b52e', // green
    disabledText: '#b5bccd', // grey500
  
    /* textField */
    textFieldBorder: '#cbd2e3', // grey400
    textFieldHoverBorder: '#b5bccd', // grey500
    textFieldHoverBackground: '#f9fafb', // grey50
    textFieldDisabledBorder: '#e6eaf4', // grey300
    textFieldDisabledHoverBorder: '#cbd2e3', // grey400
    textFieldDisabledBackground: '#eef1f7' // grey200
  };
  
  export default color;
  type Color = keyof typeof color;
  export type { Color };
  
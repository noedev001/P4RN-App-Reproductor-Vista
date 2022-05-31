/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    // base colors
    primary: '#1A0938',
    secondary: '#ED1BA3',
    sematic: '#361E60',
    accent: '#22DDF2',

    // colors
    black: '#1E1B26',
    white: '#FFFFFF',
    lightGray: '#64676D',
    lightGray2: '#EFEFF0',
    lightGray3: '#D4D5D6',
    lightGray4: '#7D7E84',
    gray: '#393E42',
    gray1: '#464646',
    gray2: '#A7A7A7',
    gray3: '#E7E7E7',
    darkRed: '#31262F',
    lightRed: '#C5505E',
    darkBlue: '#22273B',
    lightBlue: '#424BAF',
    darkGreen: '#213432',
    lightGreen: '#31Ad66',

    success: '#52c41a',
    error: '#ff190c',
    warning: '#faad14',
    disabled: 'hsl(208, 8%, 90%)',

    border: 'rgb(216, 216, 216)',
    card: 'rgb(255, 255, 255)',
    notification: 'rgb(255, 59, 48)',
    text: 'rgb(28, 28, 30)',


    linerGradient1: ['#D91193', '#22DDF2'],
    linerGradient2: ['#22DDF2', '#D91193'],


    transparent: 'rgba(0,0,0,0)',

    transparentBlack: 'rgba(0,0,0, 0.6)',
    transparentBlackHard: 'rgba(0,0,0, 0.9)',


};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    largeTitle: { fontFamily: 'Roboto-regular', fontSize: SIZES.h1, lineHeight: 30 },
    h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22 },
    title: { fontFamily: 'Montserrat-Medium', fontSize: 24, lineHeight: 24 },
};

export const customFonts = {
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'GreatVibes-Regular': require('../assets/fonts/GreatVibes-Regular.ttf'),
};
export const typetext = {
    primaryText: 'Montserrat-Regular',
    secondaryText: 'OpenSans-Regular',
    blackText: 'Montserrat-Black',
    mediumText: 'Montserrat-Medium',
    boldText: 'Montserrat-Bold',
    semiText: 'Montserrat-SemiBold',
    extraText: 'Montserrat-ExtraBold',
    stylishText: 'GreatVibes-Regular',
    italicText: 'Montserrat-Italic',
};



const appTheme = { COLORS, SIZES, FONTS, typetext, customFonts };

export default appTheme;
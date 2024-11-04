import { Platform } from 'react-native';
import { Typography } from '../types/text';

const regularFont = {
  android: 'Roboto',
  ios: 'Roboto',
};

const boldFont = {
  android: 'Roboto-bold',
  ios: 'RobotoBold',
};

export const regularFontFamily =
  Platform.OS === 'android' ? regularFont.android : regularFont.ios;

export const boldFontFamily =
  Platform.OS === 'android' ? boldFont.android : boldFont.ios;

export const typography = {
  fontFamily: regularFontFamily,
  fontDisplay: {
    f1: {
      fontSize: 16,
      fontWeight: '400',
      fontFamily: boldFontFamily,
    },
    f2: {
      fontSize: 16,
      fontWeight: '500',
      fontFamily: '500',
    },
    f3: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: boldFontFamily,
    },
    f4: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: boldFontFamily,
    },
    f5: {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: regularFontFamily,
    },
    f6: {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: boldFontFamily,
    },
    f7: {
      fontSize: 12,
      fontWeight: '600',
      fontFamily: regularFontFamily,
    },
    f8: {
      fontSize: 10,
      fontWeight: '500',
      fontFamily: boldFontFamily,
    },
    f9: {
      fontSize: 12,
      fontWeight: '300',
      fontFamily: regularFontFamily,
    },
  },
};

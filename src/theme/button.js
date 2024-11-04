import { typography } from './typography';

export const smallButton = {
  buttonStyle: {
    borderRadius: 6,
    borderWidth: 1,
    height: 34,
    width: 160,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 14,
  },
};

export const defaultButton = {
  buttonStyle: {
    width: 311,
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
  },
  titleStyle: {
    fontSize: typography.fontDisplay.f6.fontSize,
    // fontWeight: typography.fontDisplay.f6.fontWeight,
    fontWeight: 'normal',
    lineHeight: 24,
  },
};

export const roundedButton = {
  buttonStyle: {
    borderRadius: 100,
    borderWidth: 1,
    height: 32,
    width: 121,
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14.32,
  },
};

export const secondaryButton = {
  buttonStyle: {
    borderRadius: 6,
    borderWidth: 1,
    height: 32,
    width: 121,
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14.32,
  },
};

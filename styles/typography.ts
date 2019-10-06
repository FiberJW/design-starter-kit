import { Platform } from 'react-native';

export function rem(multiple) {
  const baseFontSize = 16;

  return {
    web: `${multiple}rem`,
    macos: multiple * baseFontSize,
    windows: multiple * baseFontSize,
    ios: multiple * baseFontSize,
    android: multiple * baseFontSize,
  }[Platform.OS];
}

export type fontSize = string | number;
export type typeScale = (number) => fontSize;

export function genTypeScale(ratio: number): typeScale {
  return function typeScale(note: number) {
    return rem(1 * Math.pow(ratio, note));
  };
}

export const minorSecond = genTypeScale(1.067);
export const majorSecond = genTypeScale(1.125);
export const minorThird = genTypeScale(1.2);
export const majorThird = genTypeScale(1.25);
export const perfectFourth = genTypeScale(1.333);
export const augmentedFourth = genTypeScale(1.414);
export const perfectFifth = genTypeScale(1.5);
export const goldenRatio = genTypeScale(1.618);

export function lineHeight(multiple: number, fontSize: fontSize) {
  return {
    web: `${multiple}`,
    macos: multiple * fontSize,
    windows: multiple * fontSize,
    ios: multiple * fontSize,
    android: multiple * fontSize,
  }[Platform.OS];
}

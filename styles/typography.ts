export function rem(multiple: number) {
  return multiple * 16;
}

export function lineHeight(fontSize: number, multiple: number = 1.2) {
  return fontSize * multiple;
}

export type fontSize = number;
export type typeScale = (note: number) => fontSize;

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

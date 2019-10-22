export type colorOpacityFunction = (opacity?: number) => string;

export function hsla(hue: number, saturation: number, lightness: number, alpha: number = 1) {
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
}

export const black: colorOpacityFunction = (opacity = 100) => hsla(0, 0, 0, opacity / 100);

export const white: colorOpacityFunction = (opacity = 100) => hsla(0, 0, 100, opacity / 100);

export const canvasWhite: colorOpacityFunction = (opacity = 100) => hsla(0, 0, 95, opacity / 100);

export const lightGrey: colorOpacityFunction = (opacity = 100) => hsla(240, 6, 90, opacity / 100);

<p align="center">
  <img alt="Design Starter Kit artworj" src="./design-starter-kit-artwork.png">
</p>

<h3 align="center" style="font-weight:600">
  @fiberjw/design-starter-kit
</h3>

<p align="center">
  A multi-platform design+prototyping setup powered by  <a href="https://expo.io">Expo</a> 🥤
</p>

---

<div align="center">

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)
[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://github.com/expo/expo)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://github.com/expo/expo)
[![supports web](https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff)](https://github.com/expo/expo)

</div>

## Getting Started

1. Make sure that your have [`expo-cli`](https://docs.expo.io/versions/latest/workflow/expo-cli/) installed.

1. F\*\*k this repo with the button near the top right of this GitHub page. Oh, and while you're up there, you might as well click the star button too 😉.

1. Clone your fork, `cd` into it, and `yarn` to install your Expo and React Router dependencies.

1. Run `expo start --web --dev` in your project folder and get coding!

## Deploying

Follow [Expo's guides for distribution](https://docs.expo.io/versions/v35.0.0/distribution/introduction/) to get your prototype on phones or on the web.

## Navigation

Use the modules exported from `'./navigation.ts'` to ensure that your routes will work across web and native. Also, opt to use the `useHistory` hook over the `Link` API as the `Link` API differs across web and native.

## Typography

The typeface selected for this starter kit is [Inter](https://rsms.me/inter/). There are pre-configured type scale functions in `'./styles/typography.ts'`, I also made a cross-platform `rem` converter for consistent sizing values across platforms.

## Colors

I think HSL is dope, so I keep my colors in `hsla()` form in `'./styles/colors.ts'`.

## Inspiration

[Jim Lee](https://twitter.com/wwwjim/status/1178778548313579520)

[Designing With Code by Matthew Ström](https://matthewstrom.com/writing/designing-with-code.html)
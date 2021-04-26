import { DefaultTheme } from 'styled-components/native'

// https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/
export const light: DefaultTheme = {
  colors: {
    light: 'rgb(242,242,247)',
    dark: 'rgb(142,142,147)',
    background: 'rgb(242,242,247)',
    text: 'rgb(72,72,74)',
    danger: 'rgb(255,59,48)',
    info: 'rgb(90,200,250)',
    warning: 'rgb(255,149,0)',
    primary: 'rgb(0,122,255)',
    secondary: 'rgb(255,45,85)',
    success: 'rgb(52,199,89)',
  },
}

export const dark: DefaultTheme = {
  colors: {
    light: 'rgb(142,142,147)',
    dark: 'rgb(28,28,30)',
    background: 'rgb(28,28,30)',
    text: 'rgb(142,142,147)',
    danger: 'rgb(255,69,58)',
    info: 'rgb(100,210,255)',
    warning: 'rgb(255,159,10)',
    primary: 'rgb(10,132,255)',
    secondary: 'rgb(255,55,95)',
    success: 'rgb(48,209,88)',
  },
}

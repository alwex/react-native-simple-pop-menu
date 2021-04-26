import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: string
      dark: string
      background: string
      text: string
      primary: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
    }
  }
}

import { BlurView } from '@react-native-community/blur'
import React from 'react'
import styled from 'styled-components/native'

const Container = styled(BlurView)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export default class BlurOverlay extends React.Component {
  render() {
    return (
      <Container
        blurType='light'
        blurAmount={10}
        reducedTransparencyFallbackColor='white'
      />
    )
  }
}

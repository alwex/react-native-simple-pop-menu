import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 0, 0, 0.8);
`

export default class CustomOverlay extends React.Component {
  render() {
    return <Container />
  }
}

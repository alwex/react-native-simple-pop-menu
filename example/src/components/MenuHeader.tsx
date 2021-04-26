import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  align-items: center;
  padding: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.dark};
`

const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
`

interface Props {}

const MenuHeader: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  )
}

export default MenuHeader

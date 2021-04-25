import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
`

const Text = styled.Text``

interface Props {}

const MenuHeader: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  )
}

export default MenuHeader

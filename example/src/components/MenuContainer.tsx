import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
`

interface Props {}

const MenuContainer: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

export default MenuContainer

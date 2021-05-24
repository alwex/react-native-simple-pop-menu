import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  box-shadow: 3px 3px 3px #555;
`

interface Props {}

const MenuContainer: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

export default MenuContainer

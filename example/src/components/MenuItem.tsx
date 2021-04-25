import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

interface Props {
  icon: string
}

const MenuItem: React.FC<Props> = ({ children, icon }) => {
  return (
    <Container>
      {children}
      <Icon name={icon} size={16} />
    </Container>
  )
}

export default MenuItem

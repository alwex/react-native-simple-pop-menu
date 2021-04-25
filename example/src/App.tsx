import React from 'react'
import { Text } from 'react-native-animatable'
import { PopMenu, PopMenuItem, PopMenuProvider } from 'react-native-pop-menu'
import styled from 'styled-components/native'
import Button from './components/Button'
import MenuHeader from './components/MenuHeader'
import MenuItem from './components/MenuItem'

const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`

const menuItems1: PopMenuItem[] = [
  {
    render: () => <MenuHeader>Actions</MenuHeader>,
  },
  {
    render: () => (
      <MenuItem icon='coffee'>
        <Text>Buy me a coffee</Text>
      </MenuItem>
    ),
    onPress: () => console.log('testage'),
  },
  {
    render: () => (
      <MenuItem icon='copy'>
        <Text>Duplicate</Text>
      </MenuItem>
    ),
    onPress: () => console.log('testage'),
  },
  {
    render: () => (
      <MenuItem icon='edit'>
        <Text>Edit</Text>
      </MenuItem>
    ),
    onPress: () => console.log('testage'),
  },
  {
    render: () => (
      <MenuItem icon='trash'>
        <Text>DELETE</Text>
      </MenuItem>
    ),
  },
]

const App = () => {
  return (
    <PopMenuProvider>
      <Container>
        <PopMenu items={menuItems1}>
          <Button>PRESS ME</Button>
        </PopMenu>
      </Container>
    </PopMenuProvider>
  )
}

export default App

import React from 'react'
import { PopMenu, PopMenuItem, PopMenuProvider } from 'react-native-pop-menu'
import styled, { ThemeProvider } from 'styled-components/native'
import Button from './components/Button'
import MenuContainer from './components/MenuContainer'
import MenuHeader from './components/MenuHeader'
import MenuItem from './components/MenuItem'
import { dark, light } from './theme'

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
    render: () => <MenuItem label='Buy me a coffee' icon='coffee' />,
    onPress: () => console.log('testage'),
  },
  {
    render: () => <MenuItem label='Duplicate' icon='copy' />,
    onPress: () => console.log('testage'),
  },
  {
    render: () => <MenuItem label='Edit' icon='edit' />,
    onPress: () => console.log('testage'),
  },
  {
    render: () => (
      <MenuItem
        label='DELETE'
        icon='trash'
        colorScheme='danger'
        isLast={true}
      />
    ),
  },
]

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <PopMenuProvider>
        <Container>
          <PopMenu items={menuItems1} container={MenuContainer}>
            <Button>PRESS ME</Button>
          </PopMenu>
        </Container>
      </PopMenuProvider>
    </ThemeProvider>
  )
}

export default App

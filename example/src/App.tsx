import React from 'react'
import { useColorScheme } from 'react-native'
import {
  PopMenu,
  PopMenuItem,
  PopMenuProvider,
} from 'react-native-simple-pop-menu'
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
    onPress: () => console.log('Coffee'),
  },
  {
    render: () => <MenuItem label='Duplicate' icon='copy' />,
    onPress: () => console.log('Duplicate'),
  },
  {
    render: () => <MenuItem label='Edit' icon='edit' />,
    onPress: () => console.log('Edit'),
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
    onPress: () => console.log('DELETE'),
  },
]

const App = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'light' ? light : light

  return (
    <ThemeProvider theme={theme}>
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

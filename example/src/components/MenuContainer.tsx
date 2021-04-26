import React from 'react'
import { View } from 'react-native'

interface Props {}

const MenuContainer: React.FC<Props> = ({ children }) => {
  return <View>{children}</View>
}

export default MenuContainer

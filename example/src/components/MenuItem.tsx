import React from 'react'
import styled, { useTheme } from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

const Container = styled.View<{ isLast: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-color: ${(props) => props.theme.colors.text}
  border-bottom-width: ${(props) => (props.isLast ? 0 : '0.5px')};
`

const Text = styled.Text<{ colorScheme: string }>`
  color: ${(props) =>
    props.colorScheme === 'danger'
      ? props.theme.colors.danger
      : props.theme.colors.text};
`

const Spacer = styled.View`
  width: 30px;
`

interface Props {
  isLast?: boolean
  colorScheme?: string
  label: string
  icon: string
}

const MenuItem: React.FC<Props> = ({
  label,
  icon,
  isLast = false,
  colorScheme = 'default',
}) => {
  const theme = useTheme()
  const color =
    colorScheme === 'danger' ? theme.colors.danger : theme.colors.text
  return (
    <Container isLast={isLast}>
      <Text colorScheme={colorScheme}>{label}</Text>
      <Spacer />
      <Icon name={icon} size={16} color={color} />
    </Container>
  )
}

export default MenuItem

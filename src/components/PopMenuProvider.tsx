import { PortalProvider } from '@gorhom/portal'
import React from 'react'

interface Props {}

const PopMenuProvider: React.FC<Props> = ({ children }) => {
  return <PortalProvider>{children}</PortalProvider>
}

export { PopMenuProvider }

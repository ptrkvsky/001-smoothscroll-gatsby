import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const myContext = React.createContext()

const ProviderComponent = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  return (
    <myContext.Provider
      value={{
        scrollPosition,
        updateScroll: newScrollPosition => setScrollPosition(newScrollPosition),
      }}
    >
      {children}
    </myContext.Provider>
  )
}

ProviderComponent.propTypes = {
  children: PropTypes.object.isRequired,
}

const Provider = ({ element }) => (
  <ProviderComponent>{element}</ProviderComponent>
)

Provider.propTypes = {
  element: PropTypes.object.isRequired,
}

export default Provider

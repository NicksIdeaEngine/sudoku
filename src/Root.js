import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import GlobalStyles from './styles/GlobalStyles'
import { GameContextProvider } from './utils/useGameContext'

const PageContainer = styled.main`
  margin: 0 auto;
`

const Root = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <PageContainer className="page-container">
        <GameContextProvider>{children}</GameContextProvider>
      </PageContainer>
    </>
  )
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root

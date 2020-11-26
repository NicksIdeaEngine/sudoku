import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'

const PageContainer = styled.main`
  max-width: 80em;
  margin: 0 auto;
`

const Root = ({ children }) => (
  <>
    <GlobalStyles />
    <PageContainer className="page">{children}</PageContainer>
  </>
)

Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root

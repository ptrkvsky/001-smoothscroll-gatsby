/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Scrollbar from 'react-smooth-scrollbar'
import GlobalStyle from '../styles/Global'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <div className="logo">
      <span className="item">KOV</span>
      <span className="item">DEV</span>
    </div>
    <Scrollbar damping={0.05}>
      <div style={{ maxHeight: '100vh' }}>
        <div
          style={{
            margin: `0 auto`,
            padding: `33vh 0 0 0`,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    </Scrollbar>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

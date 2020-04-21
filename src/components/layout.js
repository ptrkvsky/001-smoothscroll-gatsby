/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GlobalStyle from '../styles/Global'
import Scrollbar from 'react-smooth-scrollbar';
const Layout = ({ children }) => {

  return (
    <>
    <GlobalStyle />
    <Scrollbar damping={0.05} >
    <div style={{maxHeight: '100vh'}}>      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '90vw',
          padding: `33vh 1.0875rem`,
        }}
      >
        <main>{children}</main>

        
      </div>
      
    </div>
    </Scrollbar>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

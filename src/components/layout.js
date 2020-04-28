/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useRef, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { Power1, TimelineMax, gsap, CSSPlugin } from 'gsap'

import Scrollbar from 'react-smooth-scrollbar'
import { myContext } from '../context/Context'
import GlobalStyle from '../styles/Global'

const Layout = ({ children }) => {
  const tl = useRef(null)
  let refLogo = useRef(null)
  useEffect(() => {
    tl.current = new TimelineMax()
    tl.current.from(
      refLogo,
      0.7,
      {
        opacity: 0,
      },
      '+=2.9'
    )
  }, [])

  return (
    <myContext.Consumer>
      {context => (
        <>
          <GlobalStyle />
          <div ref={el => (refLogo = el)} className="logo">
            <span className="item">KOV</span>
            <span className="item">DEV</span>
          </div>
          <Scrollbar
            onScroll={(status, data) => {
              context.updateScroll(data.offset.y)
            }}
            damping={0.05}
          >
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
      )}
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

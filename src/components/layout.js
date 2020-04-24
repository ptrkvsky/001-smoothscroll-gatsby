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
import GlobalStyle from '../styles/Global'

const Layout = ({ children }) => {
  console.log(Scrollbar)

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

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { mobile: true })
  )
  return (
    <>
      <GlobalStyle />
      <div ref={el => (refLogo = el)} className="logo">
        <span className="item">KOV</span>
        <span className="item">DEV</span>
      </div>
      <Scrollbar
        onScroll={(status, data) => {
          console.log(data.offset)
        }}
        damping={0.05}
      >
        {console.log(Scrollbar)}
        <div style={{ maxHeight: '100vh' }}>
          <div
            style={{
              margin: `0 auto`,
              padding: `33vh 0 0 0`,
            }}
          >
            <main>{childrenWithProps}</main>
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

import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { Power1, Expo, TimelineMax, morphSVG } from 'gsap'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import girly from '../images/photo-1512295767273-ac109ac3acfa.jpeg'

import { MainTitle, SectionWork, ContainerImage } from '../styles/pages/index'

const IndexPage = () => {
  const tl = useRef(null)
  const svgOne = useRef(null)
  tl.current = new TimelineMax()

  useEffect(() => {
    console.log(svgOne.current)
    tl.current.to(svgOne.current, { morphSVG: '#svgtwo', duration: 1 })
  })
  return (
    <Layout>
      <SEO title="Home" />
      <MainTitle>
        <span className="item hide-text">
          Kovsky<span className="separation"></span>
        </span>
        <span className="item hide-text">
          Developer<span className="separation"></span>
        </span>
        <span className="item hide-text">
          Of Sorrows<span className="separation"></span>
        </span>
      </MainTitle>
      <SectionWork>
        <div className="max-container">
          <ContainerImage className="container-image">
            <img src={girly} alt="title" />
          </ContainerImage>
        </div>
      </SectionWork>
    </Layout>
  )
}

export default IndexPage

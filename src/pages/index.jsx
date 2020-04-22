import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { Power1, Expo, TimelineMax, morphSVG, Linear } from 'gsap'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import girly from '../images/chuu.png'

import {
  MainTitle,
  SectionWork,
  ContainerImage,
  TitleWork,
  FeaturedWork,
  Fond,
} from '../styles/pages/index'

const IndexPage = () => {
  const tl = useRef(null)
  const svgOne = useRef(null)
  const fond = useRef(null)
  tl.current = new TimelineMax()

  useEffect(() => {
    console.log(svgOne.current)
    tl.current.from(fond.current, 1.5, {
      height: 0,
      top: '50%',
      opacity: 0,
      ease: Linear.easeInOut,
      delay: 0.5,
    })
  })

  return (
    <>
      <Fond id="fond" ref={fond} className="fond" />>
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
            <div className="grid">
              <div>
                <FeaturedWork>Featured Projects</FeaturedWork>
                <ContainerImage className="container-image">
                  <img src={girly} alt="title" />
                </ContainerImage>
              </div>
              <TitleWork>
                <span className="item">WORK</span>
                <span className="item">WORK</span>
                <span className="item">WORK</span>
              </TitleWork>
            </div>
          </div>
        </SectionWork>
      </Layout>
    </>
  )
}

export default IndexPage

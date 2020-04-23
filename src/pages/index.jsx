import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { Power1, Expo, TimelineMax, Linear, gsap, CSSPlugin } from 'gsap'

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
  gsap.registerPlugin(CSSPlugin)

  const tl = useRef(null)
  let fond = useRef(null)
  let kovsky = useRef(null)
  let developer = useRef(null)
  let ofSorrows = useRef(null)

  useEffect(() => {
    tl.current = new TimelineMax()
    tl.current
      .to(document.querySelector('body'), 0, { visibility: 'visible' })
      .from(fond, 1.5, {
        height: 0,
        top: '50%',
        opacity: 0.3,
        ease: Power1.easeInOut,
        delay: 0.5,
      })
      .from(kovsky, 0.5, {
        yPercent: 100,
        opacity: 0,
        ease: Power1.easeInOut,
      })
      .from(
        developer, 0.5
        {
          yPercent: 100,
          opacity: 0,
          ease: Power1.easeInOut,
        },
        '-=0.2'
      )
  })

  return (
    <>
      <Fond id="fond" ref={el => (fond = el)} className="fond" />>
      <Layout>
        <SEO title="Home" />
        <MainTitle>
          <span className=" hide-text">
            <span className="item" ref={el => (kovsky = el)}>
              Kovsky
            </span>
          </span>
          <span ref={el => (developer = el)} className="item hide-text">
            Developer
          </span>
          <span ref={el => (ofSorrows = el)} className="item hide-text">
            Of Sorrows
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

import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import gsap, { Power2, TimelineMax, TweenMax, CSSPlugin } from 'gsap'
import { Tween, Timeline } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'

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

  let refSectionWork = useRef(null)
  let titleWork = useRef(null)

  useEffect(() => {
    const tween = TweenMax.from(titleWork, 5, {
      opacity: 0,
      ease: Power2.easeInOut,
    })

    // Opening
    tl.current = new TimelineMax()
    tl.current
      .to(document.querySelector('body'), 0, { visibility: 'visible' })
      .from(fond, 1.5, {
        height: 0,
        top: '50%',
        opacity: 0.3,
        ease: Power2.easeInOut,
        delay: 0.5,
      })
      .from(kovsky, 0.5, {
        yPercent: 100,
        opacity: 0,
        ease: Power2.easeInOut,
      })
      .from(
        developer,
        0.5,
        {
          yPercent: 100,
          opacity: 0,
          ease: Power2.easeInOut,
        },
        '-=0.2'
      )
  })

  return (
    <>
      <Fond id="fond" ref={el => (fond = el)} className="fond" />
      <Layout>
        <SEO title="Home" />
        {/* <Tween from={{ x: '100px', rotation: -360, delay: 2 }}>
          <div>This element gets tweened</div>
        </Tween> */}
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
        <Controller>
          <Scene duration={500} offset={50} triggerElement=".trigger">
            <Tween
              staggerFrom={{ y: 50, visibility: 'hidden', opacity: 0 }}
              staggerTo={{ y: 0, visibility: 'visible', opacity: 1 }}
              stagger={1}
            >
              <div className="trigger">
                <SectionWork
                  id="section-work"
                  ref={el => (refSectionWork = el)}
                >
                  <div className="max-container">
                    <div className="grid">
                      <div>
                        <FeaturedWork>Featured Projects</FeaturedWork>
                        <ContainerImage className="container-image">
                          <img src={girly} alt="title" />
                        </ContainerImage>
                      </div>

                      <TitleWork ref={el => (titleWork = el)}>
                        <span className="item">WORK</span>
                        <span className="item">WORK</span>
                        <span className="item">WORK</span>
                      </TitleWork>
                    </div>
                  </div>
                </SectionWork>

                <TitleWork ref={el => (titleWork = el)}>
                  <span className="item">WORK</span>
                  <span className="item">WORK</span>
                  <span className="item">WORK</span>
                </TitleWork>
                <div className="div2">test</div>
                <div className="div3">test</div>
              </div>
            </Tween>
          </Scene>
        </Controller>
      </Layout>
    </>
  )
}

export default IndexPage

import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import gsap, { Power2, TimelineMax, TweenMax, CSSPlugin } from 'gsap'
import { useInView } from 'react-intersection-observer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import girly from '../images/chuu.png'
import { myContext } from '../context/Context'

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
  // let ofSorrows = useRef(null)

  // scroll section
  const tlScroll = useRef(null)
  const workTitle = useRef(null)
  const refSectionWork = useRef(null)

  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  })

  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    })
  }

  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power2.out',
      stagger: {
        amount: 0.3,
      },
    })
  }

  const ofSorrowsAnim = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -20,
      ease: 'power2.out',
      stagger: {
        amount: 0.3,
      },
    })
  }

  // Display "of sorrows"
  const [contentSorrows, inViewSorrows] = useInView({
    triggerOnce: true,
    rootMargin: '-150px',
  })

  useEffect(() => {
    if (inView) {
      fadeIn('.fadeIn')
    }
  }, [inView])

  useEffect(() => {
    if (inViewSorrows) {
      console.log('inView')
      ofSorrowsAnim('#ofSorrows')
    }
  }, [contentSorrows, inViewSorrows])

  useEffect(() => {
    const handleScroll = () => {
      // Get de position of image element on Y
      console.log('issou')
    }
    window.addEventListener('scroll', handleScroll)
    // SCROLL WORK

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
      .from(kovsky, 0.8, {
        y: 20,
        opacity: 0,
        ease: Power2.easeInOut,
      })
      .from(
        developer,
        0.8,
        {
          y: 20,
          opacity: 0,
          ease: Power2.easeInOut,
        },
        '-=0.2'
      )
  }, [])

  return (
    <myContext.Consumer>
      {context => (
        <>
          <Fond id="fond" ref={el => (fond = el)} className="fond" />
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
              <span
                ref={contentSorrows}
                id="ofSorrows"
                className="item hide-text op0"
              >
                Of Sorrows
              </span>
            </MainTitle>

            <SectionWork ref={contentRef} id="section-work">
              <div className="max-container">
                <div className="grid">
                  <div>
                    <FeaturedWork>Featured Projects</FeaturedWork>
                    <ContainerImage className="container-image">
                      <img
                        style={{
                          bottom: (context.scrollPosition / 25) * -1 + 50,
                        }}
                        src={girly}
                        alt="title"
                      />
                    </ContainerImage>
                  </div>

                  <TitleWork className="fadeIn" id="work-title">
                    <span className="item">WORK</span>
                    <span className="item">WORK</span>
                    <span className="item">WORK</span>
                  </TitleWork>
                </div>
              </div>
            </SectionWork>
            <SectionWork id="section-work">
              <div className="max-container">
                <div className="grid">
                  <div>
                    <FeaturedWork>Featured Projects</FeaturedWork>
                    <ContainerImage className="container-image">
                      <img src={girly} alt="title" />
                    </ContainerImage>
                  </div>
                  <TitleWork className="fadeIn" id="work-title">
                    <span className="item">WORK</span>
                    <span className="item">WORK</span>
                    <span className="item">WORK</span>
                  </TitleWork>
                </div>
              </div>
            </SectionWork>
          </Layout>
        </>
      )}
    </myContext.Consumer>
  )
}

export default IndexPage

import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import gsap, {
  Power2,
  Power4,
  Expo,
  TimelineMax,
  TweenMax,
  CSSPlugin,
} from 'gsap'
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
  TxtBottomRight,
} from '../styles/pages/index'

const IndexPage = () => {
  gsap.registerPlugin(CSSPlugin)
  const tl = useRef(null)
  const tlProject1 = useRef(null)

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

  const project1Anim = () => {
    tlProject1.current = new TimelineMax()
    tlProject1.current
      .to('.cover-image', 1, {
        width: 0,
      })
      .from(
        '#project1 img',
        0.8,
        {
          scale: 1.2,
        },
        '-=-0.5'
      )
      .to('#project1-category', 0.5, {
        opacity: 0.8,
        xPercent: 0,
        ease: 'Expo.inout',
      })
      .to('.number .item', 0.5, {
        opacity: 1,
        xPercent: 0,
        ease: 'power4.out',
        stagger: {
          amount: 0.27,
        },
      })
      .to('.title .item', 0.5, {
        opacity: 1,
        xPercent: 0,
        ease: 'power4.out',
      })
  }

  // Display "of sorrows"
  const [contentSorrows, inViewSorrows] = useInView({
    triggerOnce: true,
    rootMargin: '-150px',
  })

  // Display "of sorrows"
  const [project1, inViewproject1] = useInView({
    triggerOnce: true,
    rootMargin: '-400px',
  })

  // Animate "WORK" on scroll
  useEffect(() => {
    if (inView) {
      fadeIn('.fadeIn')
    }
  }, [inView])

  // Animate "of sorrows" on scroll
  useEffect(() => {
    if (inViewSorrows) {
      console.log('inView')
      ofSorrowsAnim('#ofSorrows')
    }
  }, [contentSorrows, inViewSorrows])

  //  Animate vertical Category on view
  useEffect(() => {
    if (inViewproject1) {
      project1Anim()
    }
  }, [project1, inViewproject1])

  useEffect(() => {
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
                  </div>

                  <TitleWork className="fadeIn" id="work-title">
                    <span className="item">WORK</span>
                    <span className="item">WORK</span>
                    <span className="item">WORK</span>
                  </TitleWork>
                </div>
                <div ref={project1} id="project1" className="grid">
                  <ContainerImage className="container-image m-t-15">
                    <span className="cover-image"></span>
                    <img
                      style={{
                        bottom: (context.scrollPosition / 25) * -1 + 50,
                      }}
                      src={girly}
                      alt="title"
                    />
                  </ContainerImage>
                  <TxtBottomRight className="txt-bottom-right">
                    <div className="content">
                      <span className="number">
                        <div className="hide-text">
                          <span className="item">0</span>
                          <span className="item">1</span>
                        </div>
                      </span>
                      <span className="title hide-text">
                        <span className="item">Chou Seoul</span>
                      </span>
                      <span className="category hide-text">
                        <span id="project1-category" className="d-block op0">
                          Website
                        </span>
                      </span>
                    </div>
                  </TxtBottomRight>
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

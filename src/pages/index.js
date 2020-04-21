import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { MainTitle } from '../styles/pages/index'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainTitle>
      <span>Kovsky</span>
      <span>Developer</span> 
      <span>Of Sorrows</span>
    </MainTitle>
  </Layout>
)

export default IndexPage

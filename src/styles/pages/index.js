import styled from '@emotion/styled'
import theme from '../theme'

const Fond = styled('div')`
  width: 100%;
  height: 100vh;
  background-color: ${theme.bg.main};
  position: absolute;
  z-index: -1;
`

const MainTitle = styled('h1')`
  text-transform: uppercase;
  font-size: 30vh;
  font-family: 'Saol Display Regular', serif;
  text-align: right;
  line-height: 1;
  .item {
    display: inline-block;
  }
`

const SectionWork = styled('section')`
  background: #050505;
  padding: 16.5vh;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const ContainerImage = styled('div')`
  margin-top: 20vh;
  display: inline-block;
  background: ${theme.colors.primary};
  position: relative;
  overflow: hidden;
  min-height: 630px;
  position: relative;
  width: 100%;

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`
const FeaturedWork = styled('p')`
  font-size: 16px;
  color: #fff;
`
const TitleWork = styled('h2')`
  font-size: 11vw;
  text-align: right;
  color: #fff;
  line-height: 0.88;
  .item {
    display: block;
    color: transparent;
    -webkit-text-stroke: 4px ${theme.colors.primary};
    font-family: ${theme.fonts.title};
    line-height: 0.38;
    &:nth-child(2) {
      color: ${theme.colors.primary};
      mix-blend-mode: hard-light;
    }
  }
`

export { MainTitle, SectionWork, ContainerImage, TitleWork, FeaturedWork, Fond }

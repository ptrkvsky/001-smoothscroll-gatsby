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
  font-size: 16vw;
  font-family: 'Saol Display Regular', serif;
  text-align: right;
  line-height: 1;
  color: #000;
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
  display: inline-block;
  background: ${theme.colors.primary};
  position: relative;
  overflow: hidden;
  min-height: 630px;
  position: relative;
  width: 100%;
  margin-top: 15px;

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .cover-image {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #050505;
  }
`
const FeaturedWork = styled('p')`
  font-size: 24px;
  color: #fff;
`
const TitleWork = styled('h2')`
  font-size: 11vw;
  text-align: right;
  color: #fff;
  line-height: 0.38;
  .item {
    display: block;
    color: transparent;
    -webkit-text-stroke: 4px ${theme.colors.primary};
    font-family: ${theme.fonts.title};
    &:nth-child(2) {
      color: ${theme.colors.primary};
      mix-blend-mode: hard-light;
    }
  }
`

const TxtBottomRight = styled('div')`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: #fff;
  font-size: 20px;
  font-family: ${theme.fonts.title};

  .title {
    display: block;
    color: #ffffff;
    font-family: 'Saol Display Regular', serif;
    font-size: 24px;
  }
  .category {
    display: block;

    writing-mode: vertical-lr;
    text-transform: uppercase;
    position: absolute;
    top: 15px;
    left: 0;
    display: block;
    height: 100%;
    font-size: 77px;
    text-align: left;
    span {
      transform: translateX(-50%);
    }
  }

  .number {
    position: absolute;
    top: 50%;
    left: 50%;
    line-height: 1;
    transform: translate(-50%, -50%);
    font-size: 150px;
    -webkit-text-stroke: 4px #1500f7;
    color: transparent;

    .item {
      display: inline-block;
      opacity: 0;
      transform: translateX(-50%);
    }
  }
`

export {
  MainTitle,
  SectionWork,
  ContainerImage,
  TitleWork,
  FeaturedWork,
  Fond,
  TxtBottomRight,
}

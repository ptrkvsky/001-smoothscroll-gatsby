import React from 'react'
import { Global, css } from '@emotion/core'
import theme from './theme'
import mediaQueries from './mediaQueries'

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        /* RESET CSS ERIC MEYER */
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        /* -------------- */
        /*  TWEAK GATSBY  */
        /* -------------- */
        .tl-edges {
          min-height: 100vh;
        }

        /* ------------- */
        /* STYLES GLOBAL */
        /* ------------- */
        @font-face {
          font-family: 'Saol Display Regular';
          src: url('//db.onlinewebfonts.com/t/4c4c08af466e9ad071b6d69cf44093df.eot');
          src: url('//db.onlinewebfonts.com/t/4c4c08af466e9ad071b6d69cf44093df.eot?#iefix')
              format('embedded-opentype'),
            url('//db.onlinewebfonts.com/t/4c4c08af466e9ad071b6d69cf44093df.woff2')
              format('woff2'),
            url('//db.onlinewebfonts.com/t/4c4c08af466e9ad071b6d69cf44093df.woff')
              format('woff'),
            url('//db.onlinewebfonts.com/t/4c4c08af466e9ad071b6d69cf44093df.ttf')
              format('truetype'),
            url('//db.onlinewebfonts.com/t/4c4c08af466e9ad071b6d69cf44093df.svg#Saol Display Regular')
              format('svg');
        }

        @font-face {
          font-family: 'MTTMilano-UltraBold';
          src: url('//db.onlinewebfonts.com/t/dc085b992551ffb9efd9a0adb99a7918.eot');
          src: url('//db.onlinewebfonts.com/t/dc085b992551ffb9efd9a0adb99a7918.eot?#iefix')
              format('embedded-opentype'),
            url('//db.onlinewebfonts.com/t/dc085b992551ffb9efd9a0adb99a7918.woff2')
              format('woff2'),
            url('//db.onlinewebfonts.com/t/dc085b992551ffb9efd9a0adb99a7918.woff')
              format('woff'),
            url('//db.onlinewebfonts.com/t/dc085b992551ffb9efd9a0adb99a7918.ttf')
              format('truetype'),
            url('//db.onlinewebfonts.com/t/dc085b992551ffb9efd9a0adb99a7918.svg#MTTMilano-UltraBold')
              format('svg');
        }

        html {
          scroll-behavior: smooth;
        }
        body {
          background: ${theme.bg.second};
          color: ${theme.colors.main};
          font-size: 18px;
          font-family: ${theme.fonts.primary};
          min-height: 100vh;

          visibility: hidden;
        }

        .main-container {
          position: relative;
          margin-top: ${theme.columnGap};
        }

        .logo {
          position: fixed;
          top: 3vh;
          left: 3vh;
          font-family: 'MTTMilano-UltraBold';
          font-size: 40px;
          text-transform: uppercase;
          line-height: 0.75;
          z-index: -1;
          letter-spacing: -4px;
          z-index: 100;
          color: #fbff00;
          mix-blend-mode: exclusion;
          .item {
            display: block;
          }
        }

        img {
          max-width: 100%;
        }

        .op0 {
          opacity: 0;
        }

        .m-t-15 {
          margin-top: 15px;
        }

        a {
          color: ${theme.colors.primary};
          text-decoration: none;
        }

        /* HELPERS */
        .max-container {
          width: ${theme.maxWidth};
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
        #svgtwo {
          visibility: hidden;
        }
        #demo {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;

          max-width: 100%;
          max-height: 100%;
        }
        #mid,
        #end {
          visibility: hidden;
        }
        .hide-text {
          display: block;
          position: relative;
          overflow: hidden;
        }

        .fadeIn {
          opacity: 0;
        }
      `}
    />
  )
}

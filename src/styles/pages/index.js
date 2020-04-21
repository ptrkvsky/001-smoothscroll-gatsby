import styled from '@emotion/styled'
import theme from '../theme'


const MainTitle = styled("h1")` 
    text-transform: uppercase;
    font-size: 40vh;
    font-family: 'Saol Display Regular',serif;
    letter-spacing: -52px;
    text-align: right;
    line-height: 2;

    font-family: ${theme.fonts.title};
    span{
        display: block;
    }
`

export { MainTitle }
import styled from '@emotion/styled'
import theme from '../theme'


const MainTitle = styled("h1")` 
    text-transform: uppercase;
    font-size: 30vh;
    font-family: 'Saol Display Regular',serif;
    text-align: right;
    line-height: 1;

    font-family: ${theme.fonts.title};
    .separation{
        position: absolute; width: 20vw; height: 10px; background: #000;
    }
`

const SectionWork = styled("section")` 
    background: #000;
    padding: 10vh;
`

export { MainTitle, SectionWork }
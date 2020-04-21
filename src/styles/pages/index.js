import styled from '@emotion/styled'
import theme from '../theme'


const MainTitle = styled("h1")` 
    text-transform: uppercase;
    font-size: 40vh;
    font-family: 'Saol Display Regular',serif;
    text-align: right;
    line-height: 1;

    font-family: ${theme.fonts.title};
    span{
        display: block;
        border-bottom: 8px solid #000;
        margin-bottom: 50px;
    }
`

export { MainTitle }
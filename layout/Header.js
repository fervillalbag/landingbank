
import HeaderInfo from './HeaderInfo'
import HeaderMedia from './HeaderMedia'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'

const HeaderContainer = styled.header`
   position: relative;
   background-color: ${colors.DarkViolet};
   z-index: 10;

   @media screen and (min-width: 768px) {
      height: 48rem;
      margin-bottom: 16rem;
   }
`

const HeaderWrapper = styled.div`
   display: grid;
      
   @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 3rem;
   }
`

export default function Header() {
   return (
      <HeaderContainer>
         <HeaderWrapper
            className="container">
            <HeaderMedia />
            <HeaderInfo />
         </HeaderWrapper>
      </HeaderContainer>
   )
}

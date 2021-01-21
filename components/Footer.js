
import React from 'react'
import FooterHeader from './FooterHeader'
import FooterMain from './FooterMain'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'

const FooterContainer = styled.footer`
   background-color: ${colors.VeryLightGray};
   margin-top: 16rem;
   position: relative;
`

const FooterWrapper = styled.div``

export default function Footer() {
   return (
      <FooterContainer>
         <FooterWrapper className="container">
            <FooterHeader />
            <FooterMain />
         </FooterWrapper>
      </FooterContainer>
   )
}

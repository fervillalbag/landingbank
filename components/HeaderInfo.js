
import Link from 'next/link'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'
import { ButtonLink } from './Button'

const InfoWrapper = styled.div`
   text-align: center;
   padding-top: 6rem;
   padding-bottom: 6rem;

   @media screen and (min-width: 768px) {
      order: -1;
      text-align: left;
   }

   &:before {
      content: '';
      display: block;
      background-image: url('/bg-pattern-intro-left-mobile.svg');
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top: 45rem;
      left: 0;
      width: 16.8rem;
      height: 16.5rem;
      z-index: -1;

      @media screen and (min-width: 768px) {
         background-image: url('/bg-pattern-intro-left-desktop.svg');
         width: 17rem;
         background-size: contain;
         height: 50rem;
         top: 35rem;
      }
   }

   &:after {
      content: '';
      display: block;
      background-image: url('/bg-pattern-intro-right-mobile.svg');
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      bottom: -24rem;
      right: 0;
      width: 12.4rem;
      height: 33.3rem;
      z-index: -1;

      @media screen and (min-width: 768px) {
         background-image: url('/bg-pattern-intro-right-desktop.svg');
         top: -5rem;
         width: 35rem;
         height: 50rem;
         z-index: 1;
      }
   }
`

const Heading = styled.h2`
   font-family: ${colors.fontHeading};
   color: ${colors.VeryLightGray};
   font-size: 4.6rem;
   font-weight: 400;

   @media screen and (min-width: 768px) {
      font-size: 6rem;
   }
`

const Description = styled.p`
   font-size: 1.4rem;
   line-height: 1.6;
   color: ${colors.VeryLightGray};
   margin-top: 2rem;

   @media screen and (min-width: 768px) {
      font-size: 1.6rem;
   }
`

const HeaderFooter = styled.footer`
   display: flex;
   justify-content: center;
   margin-top: 3rem;

   @media screen and (min-width: 768px) {
      justify-content: flex-start;
   }
`

export default function HeaderInfo() {
   return (
      <InfoWrapper>
         <Heading>Humanizing your insurance.</Heading>
         <Description>
            Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for your. Ensure you and your loved ones are protected.
         </Description>
         <HeaderFooter className="header__action">
            <Link href="/">
               <ButtonLink className="header__link">View plans</ButtonLink>
            </Link>
         </HeaderFooter>
      </InfoWrapper>
   )
}


import Link from 'next/link'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'
import { ButtonLink } from './Button'

const AboutContainer = styled.section`
   background-color: ${colors.DarkViolet};
   padding: 5rem 1.25rem;
   display: grid;
   grid-row-gap: 3.5rem;
   justify-items: center;
   position: relative;
   overflow: hidden;

   @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      padding: 5rem;
   }

   &:before {
      content: '';
      display: block;
      width: 17.6rem;
      height: 31.7rem;
      background-image: url('/bg-pattern-how-we-work-mobile.svg');
      background-size: contain;
      position: absolute;
      right: 0;
      z-index: 1;

      @media screen and (min-width: 768px) {
         background-image: url('/bg-pattern-how-we-work-desktop.svg');
         background-repeat: no-repeat;
         background-position: center right;
         width: 100%;
         height: 100%;
      }
   }
`

const Heading = styled.h2`
   font-size: 4rem;
   color: ${colors.VeryLightGray};
   text-align: center;
   z-index: 10;

   @media screen and (min-width: 768px) {
      text-align: left;
      font-size: 5.25rem;
   }
`

export default function AboutUs() {
   return (
      <AboutContainer className="container">
         <Heading>Find out more about how we work</Heading>
         <Link href="/">
            <ButtonLink className="about__button">
               How we work
            </ButtonLink>
         </Link>
      </AboutContainer>
   )
}

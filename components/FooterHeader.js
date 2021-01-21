
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SocialLink from './SocialLink'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'

const Header = styled.header`
   display: grid;
   align-items: center;
   justify-items: center;
   padding-top: 10rem;
   padding-bottom: 5rem;
   border-bottom: 1px solid ${colors.GrayishBlue};
   overflow: hidden;

   @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      justify-items: start;
      padding-top: 8rem;
      padding-bottom: 4rem;
   }

   &:before {
      content: '';
      display: block;
      background-image: url('/bg-pattern-footer-mobile.svg');
      width: 100%;
      height: 17.3rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      @media screen and (min-width: 768px) {
         background-image: url('/bg-pattern-footer-desktop.svg');
         background-size: contain;
         background-repeat: no-repeat;
         width: 52.8rem;
         height: 23.1rem;
      }
   }
`

const Social = styled.div`
   display: flex;
   align-items: center;
   z-index: 10;

   @media screen and (min-width: 768px) {
      justify-self: end;
   }
`

const HeaderLink = styled.a`
   z-index: 10;
   cursor: pointer;
`

const HeaderImg = styled.img`
   width: 16rem;
   margin-bottom: 3rem;

   @media screen and (min-width: 768px) {
      margin-bottom: 0;
   }
`

export default function FooterHeader() {

   const [socialIcons, setSocialIcons] = useState([])

   useEffect(() => {
      (async () => {
         const url = `https://raw.githubusercontent.com/fervillalbag/landingbank/main/data/social.json`
         const res = await fetch(url)
         const data = await res.json()
         setSocialIcons(data.icons)
      })()
   }, [])

   return (
      <Header>
         <Link href="/">
            <HeaderLink>
               <HeaderImg src="/logo.svg" alt="Logo de la empresa" />
            </HeaderLink>
         </Link>
         <Social>

            {socialIcons.map(socialIcon => (
               <SocialLink key={socialIcon.id} socialIcon={socialIcon} />
            ))}

         </Social>
      </Header>
   )
}

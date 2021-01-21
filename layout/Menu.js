
import Link from 'next/link'
import styled from '@emotion/styled'
import { colors, navLinks } from '../utils/variables'
import NavItemList from './NavItemList'

const MenuContainer = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${colors.VeryDarkViolet};
   padding-top: 5rem;

   position: fixed;
   top: 7rem;
   left: 0;
   width: 100%;
   height: calc(100vh - 7rem);
   transition: all 600ms ease;
   transform: translateY(2000px);
   z-index: 10;

   &.active {
      transform: translateY(0);
   }

   &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url('/bg-pattern-mobile-nav.svg');
      background-position: bottom center;
      background-size: contain;
      background-repeat: no-repeat;
      
      @media screen and (min-width: 768px) {
         display: none;
      }
   }

   @media screen and (min-width: 768px) {
      position: initial;
      transform: translateY(0);
      background-color: transparent;
      height: 100%;
      padding-top: 0;
      flex-direction: row;
      justify-content: flex-end;
      align-content: center;
   }
`

export const NavItem = styled.li`
   margin-bottom: 3rem;

   @media screen and (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 2rem;

      &:last-of-type {
         margin-right: 0;
      }
   }
`

const NavLinkPlans = styled.a`
   border: 2px solid ${colors.VeryLightGray};
   padding: 1.25rem 8rem;

   @media screen and (min-width: 768px) {
      padding: 0.7rem 2rem;
      border: 2px solid ${colors.DarkViolet};
      color: ${colors.DarkViolet};
      font-size: 1.3rem;
      text-transform: uppercase;
      cursor: pointer;
      font-weight: 700;
      transition: all 400ms ease;

      &:hover {
         background-color: ${colors.DarkViolet};
         color: ${colors.VeryLightGray};
      }
   }
`

export default function Menu({ barActive }) {
   return (
      <MenuContainer
         className={!barActive && 'navigation-menu active'}
      >
         {navLinks.map(navLink => (
            <NavItemList key={navLink} navLink={navLink} />
         ))}
         <NavItem>
            <Link href="/">
               <NavLinkPlans>
                  View plans
               </NavLinkPlans>
            </Link>
         </NavItem>
      </MenuContainer>
   )
}

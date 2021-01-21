
import Link from 'next/link'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'

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

export default function Menu({ barActive }) {
   return (
      <MenuContainer className={!barActive && 'navigation-menu active'}>
         <li className="navigation-menu__item">
            <Link href="/">
               <a className="navigation-menu__link">
                  How we work
               </a>
            </Link>
         </li>
         <li className="navigation-menu__item">
            <Link href="/">
               <a className="navigation-menu__link">
                  Blog
               </a>
            </Link>
         </li>
         <li className="navigation-menu__item">
            <Link href="/">
               <a className="navigation-menu__link">
                  Account
               </a>
            </Link>
         </li>
         <li className="navigation-menu__item">
            <Link href="/">
               <a className="navigation-menu__link navigation-menu__link--plans">
                  View plans
               </a>
            </Link>
         </li>
      </MenuContainer>
   )
}

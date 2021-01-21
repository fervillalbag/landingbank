
import Link from 'next/link'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'
import { NavItem } from './Menu'

const NavLink = styled.a`
   color: ${colors.VeryLightGray};
   font-size: 2rem;
   text-transform: uppercase;
   cursor: pointer;

   @media screen and (min-width: 768px) {
      color: ${colors.DarkViolet};
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      transition: color 300ms ease;

      &:hover {
         color: ${colors.DarkGrayishViolet};
      }
   }
`

export default function NavItemList({ navLink }) {
   return (
      <NavItem>
         <Link href="/">
            <NavLink>
               {navLink}
            </NavLink>
         </Link>
      </NavItem>
   )
}

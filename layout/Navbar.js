
import { useState } from 'react'
import Menu from './Menu'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'
import NavbarBrand from './NavbarBrand'
import NavbarBars from './NavbarBars'

const Navigation = styled.nav`
   background-color: ${colors.VeryLightGray};
   position: sticky;
   top: 0;
   height: 7rem;
   z-index: 20;
`

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 100%;
   max-width: 1170px;
   width: 92vw;
   margin-right: auto;
   margin-left: auto;
`

export default function Navbar() {

   const [barActive, setBarActive] = useState(true)

   const onToggleMenu = () => setBarActive(!barActive)

   return (
      <Navigation>
         <Container>
            <NavbarBrand />
            <NavbarBars onToggleMenu={onToggleMenu} />
            <Menu barActive={barActive} />
         </Container>
      </Navigation>
   )
}


import styled from '@emotion/styled'

const Bars = styled.div`
   @media screen and (min-width: 768px) {
      display: none;
   }
`

const Button = styled.button`
   border: none;
   background-color: transparent;
   font-size: 2rem;
   color: $DarkViolet;
   cursor: pointer;

   &:focus {
      outline: none;
   }
`

export default function NavbarBars({ onToggleMenu }) {
   return (
      <Bars>
         <Button
            onClick={onToggleMenu}
         >
            <i className="fas fa-bars"></i>
         </Button>
      </Bars>
   )
}

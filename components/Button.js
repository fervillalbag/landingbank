
import styled from '@emotion/styled'
import { colors } from '../utils/variables'

export const ButtonLink = styled.a`
   display: $display;
   border: 1px solid ${colors.VeryLightGray};
   padding: 1rem 2rem;
   font-size: 1.6rem;
   color: ${colors.VeryLightGray};
   text-transform: uppercase;
   font-weight: 700;
   background-color: transparent;
   cursor: pointer;
   outline: none;
   transition: all 400ms ease;

   &:hover {
      background-color: ${colors.VeryLightGray};
      color: ${colors.DarkViolet};
   }
`

export const Button = styled.button`
   display: $display;
   border: 1px solid ${colors.VeryLightGray};
   padding: 1rem 2rem;
   font-size: 1.6rem;
   color: ${colors.VeryLightGray};
   text-transform: uppercase;
   font-weight: 700;
   background-color: transparent;
   cursor: pointer;
   outline: none;
   transition: all 400ms ease;

   &:hover {
      background-color: ${colors.VeryLightGray};
      color: ${colors.DarkViolet};
   }
`
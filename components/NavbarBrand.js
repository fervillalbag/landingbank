
import Link from 'next/link'
import styled from '@emotion/styled'

const Image = styled.img`
   width: 10rem;

   @media screen and (min-width: 768px) {
      width: 15rem;
   }
`

export default function NavbarBrand() {
   return (
      <div>
         <Link href="/">
            <a>
               <Image
                  src="/logo.svg"
                  alt="Logo"
               />
            </a>
         </Link>
      </div>
   )
}


import Link from 'next/link'
import styled from '@emotion/styled'

const SocialLinked = styled.a`
   margin-right: 2rem;
   cursor: pointer;

   &:last-of-type {
      margin-right: 0;
   }
`

const SocialIcon = styled.img`
   width: 2.5rem;
`

export default function SocialLink({ socialIcon }) {

   const { urlImage, title } = socialIcon

   return (
      <Link href="/">
         <SocialLinked>
            <SocialIcon src={urlImage} alt={title} />
         </SocialLinked>
      </Link>
   )
}

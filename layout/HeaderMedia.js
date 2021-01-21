
import styled from '@emotion/styled'

const MediaWrapper = styled.div`
   height: 45rem;

   @media screen and (min-width: 768px) {
      height: 100%;
   }
`

const Image = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   height: inherit;
   object-fit: cover;

   @media screen and (min-width: 768px) {
      position: initial;
      margin-top: 3rem;
      object-fit: contain;
      object-position: center right;
      height: 55rem;
   }
`

export default function HeaderMedia() {
   return (
      <MediaWrapper>
         <Image
            srcSet="/image-intro-mobile.jpg 320w,
                    /image-intro-desktop.jpg 576w"
            alt="Imagen de Header"
         />
      </MediaWrapper>
   )
}

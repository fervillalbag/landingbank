
import styled from '@emotion/styled'

const Item = styled.article`
   display: grid;
   justify-items: center;
   margin-bottom: 4rem;

   @media screen and (min-width: 768px) {
      justify-items: start;
      margin-bottom: 0;
   }

   &:last-child {
      margin-bottom: 0;
   }
`

const Image = styled.img`
   width: 8rem;
`

const Heading = styled.h3`
   font-size: 2.25rem;
   margin-top: 3rem;
   margin-bottom: 0.75rem;
   color: $VeryDarkViolet;
   text-transform: capitalize;

   @media screen and (min-width: 768px) {
      margin-bottom: 1rem;
   }
`

const Info = styled.p`
   font-size: 1.6rem;
   text-align: center;
   color: $DarkGrayishViolet;
   line-height: 1.6;

   @media screen and (min-width: 768px) {
      text-align: left;
      margin-top: 0;
   }
`

export default function Service({ dataService }) {

   const { image, name, description } = dataService

   return (
      <Item>
         <Image className="services__icon" src={image} alt={name} />
         <Heading>{name}</Heading>
         <Info className="services__description">{description}</Info>
      </Item>
   )
}

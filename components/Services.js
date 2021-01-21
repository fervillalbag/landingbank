
import Service from "./Service"
import styled from '@emotion/styled'
import { useEffect, useState } from "react"
import { colors } from "../utils/variables"

const ServicesContainer = styled.section`
   padding-top: 14rem;
   padding-bottom: 14rem;
`

const ServicesWrapper = styled.div``

const Heading = styled.h2`
   text-align: center;
   font-size: 5rem;
   margin-bottom: 8rem;
   color: $VeryDarkViolet;
   position: relative;

   @media screen and (min-width: 768px) {
      text-align: left;
   }

   &:before {
      content: '';
      display: block;
      width: 14rem;
      height: 1px;
      background-color: ${colors.DarkGrayishViolet};
      position: absolute;
      top: -3rem;
      left: 50%;
      transform: translateX(-50%);

      @media screen and (min-width: 768px) {
         left: 0;
         transform: translateX(0);
      }
   }
`

const Main = styled.div`
   display: grid;

   @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 4rem;
   }
`

export default function Services() {

   const [dataServices, setDataServices] = useState([])

   useEffect(() => {
      (async () => {
         const url = `https://raw.githubusercontent.com/fervillalbag/landingbank/main/data/services.json`
         const res = await fetch(url)
         const data = await res.json()
         setDataServices(data.posts)
      })()
   }, [])

   return (
      <ServicesContainer>
         <ServicesWrapper className="container">
            <Heading>We’re different</Heading>

            <Main>
               {dataServices.map(dataService => (
                  <Service
                     key={dataService.id}
                     dataService={dataService}
                  />
               ))}
            </Main>

         </ServicesWrapper>
      </ServicesContainer>
   )
}

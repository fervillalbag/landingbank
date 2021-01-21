
import Service from "./Service"
import styled from '@emotion/styled'

const ServicesContainer = styled.section`
   padding-top: 14rem;
   padding-bottom: 14rem;
`

const ServicesWrapper = styled.div``

export default function Services() {
   return (
      <ServicesContainer className="services container">
         <ServicesWrapper className="container">
            <h2 className="services__title">We’re different</h2>

            <main className="services__main">
               <Service
               />
            </main>
         </ServicesWrapper>
      </ServicesContainer>
   )
}

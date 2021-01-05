
import Head from 'next/head'
import AboutUs from '../layout/AboutUs'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Navbar from '../layout/Navbar'
import Services from '../layout/Services'

/*
   background-image: url('/bg-pattern-how-we-work-desktop.svg');
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center right;
   width: 100%;
   height: 100%;
*/

export default function Home() {
   return (
      <>
         <Head>
            <title>Frontend Mentor | Insure landing page</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Karla:wght@400;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
         </Head>

         <Navbar />
         <Header />
         <Services />
         <AboutUs />
         <Footer />
      </>
   )
}

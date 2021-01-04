
import React from 'react'
import FooterHeader from './FooterHeader'
import FooterMain from './FooterMain'

export default function Footer() {
   return (
      <footer className="footer">
         <div className="container">
            <FooterHeader />
            <FooterMain />
         </div>
      </footer>
   )
}

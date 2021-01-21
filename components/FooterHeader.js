
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SocialLink from './SocialLink'

export default function FooterHeader() {

   const [socialIcons, setSocialIcons] = useState([])

   useEffect(() => {
      (async () => {
         const url = `https://raw.githubusercontent.com/fervillalbag/landingbank/main/data/social.json`
         const res = await fetch(url)
         const data = await res.json()
         setSocialIcons(data.icons)
      })()
   }, [])

   return (
      <header className="footer-header">
         <Link href="/">
            <a className="footer-header__link">
               <img className="footer-header__image" src="/logo.svg" alt="Logo de la empresa" />
            </a>
         </Link>
         <div className="footer-social">

            {socialIcons.map(socialIcon => (
               <SocialLink key={socialIcon.id} socialIcon={socialIcon} />
            ))}

         </div>
      </header>
   )
}

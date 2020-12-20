
import { useState } from 'react'
import Link from 'next/link'
import Menu from './Menu'

export default function Navbar() {

   const [barActive, setBarActive] = useState(true)

   const onToggleMenu = () => setBarActive(!barActive)

   return (
      <nav className="navigation">
         <div className="container">
            <div className="navigation-brand">
               <Link href="/">
                  <a className="navigation-brand__link">
                     <img src="/logo.svg" alt="Logo" className="navigation-brand__image" />
                  </a>
               </Link>
            </div>
            <div className="navigation-bars">
               <button
                  className="navigation-bars__button"
                  onClick={onToggleMenu}
               >
                  <i className="fas fa-bars"></i>
               </button>
            </div>
            <Menu barActive={barActive} />
         </div>
      </nav>
   )
}

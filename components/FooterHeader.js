
import Link from 'next/link'

export default function FooterHeader() {
   return (
      <header className="footer-header">
         <Link href="/">
            <a className="footer-header__link">
               <img className="footer-header__image" src="/logo.svg" alt="Logo de la empresa" />
            </a>
         </Link>
         <div className="footer-social">
            <Link href="/">
               <a className="footer-social__link">
                  <img className="footer-social__icon" src="/icon-facebook.svg" alt="Logo de Facebook" />
               </a>
            </Link>
            <Link href="/">
               <a className="footer-social__link">
                  <img className="footer-social__icon" src="/icon-twitter.svg" alt="Logo de Twitter" />
               </a>
            </Link>
            <Link href="/">
               <a className="footer-social__link">
                  <img className="footer-social__icon" src="/icon-instagram.svg" alt="Logo de Instagram" />
               </a>
            </Link>
            <Link href="/">
               <a className="footer-social__link">
                  <img className="footer-social__icon" src="/icon-pinterest.svg" alt="Logo de Pinterest" />
               </a>
            </Link>
         </div>
      </header>
   )
}

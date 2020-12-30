
import Link from 'next/link'

export default function FooterHeader() {
   return (
      <header className="footer-header">
         <Link href="/">
            <a className="footer-header__link">
               <img className="footer-header__image" src="/logo.svg" alt="" />
            </a>
         </Link>
         <div className="footer-social">
            <Link href="/">
               <a className="footer-social__link">
                  <img className="footer-social__icon" src="/icon-facebook.svg" alt="" />
               </a>
            </Link>
            <Link href="/">
               <a className="footer-social__link">
                  <img className="footer-social__icon" src="/icon-twitter.svg" alt="" />
               </a>
            </Link>
            <Link href="/">
               <a className="footer-social__link">
                  <img className="footer-social__icon" src="/icon-instagram.svg" alt="" />
               </a>
            </Link>
            <Link href="/">
               <a className="footer-social__link">
                  <img className="footer-social__icon" src="/icon-pinterest.svg" alt="" />
               </a>
            </Link>
         </div>
      </header>
   )
}


import Link from 'next/link'

export default function FooterMain() {
   return (
      <div className="footer-main">
         <div className="footer-main__item">
            <h4 className="footer-main__title">Our company</h4>
            <Link href="/">
               <a className="footer-main__link">
                  How we work
               </a>
            </Link>
            <Link href="/">
               <a className="footer-main__link">
                  Why Insure?
               </a>
            </Link>
            <Link href="/">
               <a className="footer-main__link">
                  View plans
               </a>
            </Link>
            <Link href="/">
               <a className="footer-main__link">
                  Reviews
               </a>
            </Link>
         </div>
         <div className="footer-main__item">
            <h4 className="footer-main__title">Help me</h4>
            <Link href="/">
               <a className="footer-main__link">
                  FAQ
               </a>
            </Link>
            <Link href="/">
               <a className="footer-main__link">
                  Terms of use
               </a>
            </Link>
            <Link href="/">
               <a className="footer-main__link">
                  Privacy policy
               </a>
            </Link>
            <Link href="/">
               <a className="footer-main__link">
                  Cookies
               </a>
            </Link>
         </div>
         <div className="footer-main__item">
            <h4 className="footer-main__title">Contact</h4>
            <Link href="/">
               <a className="footer-main__link">
                  Sales
               </a>
            </Link>
            <Link href="/">
               <a className="footer-main__link">
                  Support
               </a>
            </Link>
            <Link href="/">
               <a className="footer-main__link">
                  Live chat
               </a>
            </Link>
         </div>
         <div className="footer-main__item">
            <h4 className="footer-main__title">Others</h4>
            <Link href="/">
               <a className="footer-main__link">
                  Careers
               </a>
            </Link>
            <Link href="/">
               <a className="footer-main__link">
                  Press
               </a>
            </Link>
            <Link href="/">
               <a className="footer-main__link">
                  Licenses
               </a>
            </Link>
         </div>
      </div>
   )
}

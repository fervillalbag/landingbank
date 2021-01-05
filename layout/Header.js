
import Link from 'next/link'

export default function Header() {
   return (
      <header className="header">
         <div className="container">
            <div className="header__media">
               <img
                  className="header__image"
                  srcSet="/image-intro-mobile.jpg 320w,
                          /image-intro-desktop.jpg 576w"
                  alt=""
               />
            </div>
            <div className="header__info">
               <h2 className="header__title">Humanizing your insurance.</h2>
               <p className="header__description">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for your. Ensure you and your loved ones are protected.</p>
               <footer className="header__action">
                  <Link href="/">
                     <a className="header__link">View plans</a>
                  </Link>
               </footer>
            </div>
         </div>
      </header>
   )
}

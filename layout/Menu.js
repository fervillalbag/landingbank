
import Link from 'next/link'

export default function Menu({ barActive }) {
   return (
      <ul className={barActive ? 'navigation-menu' : 'navigation-menu active'}>
         <li className="navigation-menu__item">
            <Link href="/">
               <a className="navigation-menu__link">
                  How we work
               </a>
            </Link>
         </li>
         <li className="navigation-menu__item">
            <Link href="/">
               <a className="navigation-menu__link">
                  Blog
               </a>
            </Link>
         </li>
         <li className="navigation-menu__item">
            <Link href="/">
               <a className="navigation-menu__link">
                  Account
               </a>
            </Link>
         </li>
         <li className="navigation-menu__item">
            <Link href="/">
               <a className="navigation-menu__link navigation-menu__link--plans">
                  View plans
               </a>
            </Link>
         </li>
      </ul>
   )
}

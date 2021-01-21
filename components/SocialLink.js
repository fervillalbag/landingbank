
import Link from 'next/link'

export default function SocialLink({ socialIcon }) {

   const { src, alt } = socialIcon

   return (
      <Link href="/">
         <a className="footer-social__link">
            <img className="footer-social__icon" src={src} alt={alt} />
         </a>
      </Link>
   )
}


import Link from 'next/link'

export default function AboutUs() {
   return (
      <section className="about container">
         <h2 className="about__title">Find out more about how we work</h2>
         <Link href="/">
            <a className="about__button">
               How we work
            </a>
         </Link>
      </section>
   )
}

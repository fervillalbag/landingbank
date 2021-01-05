import Service from "./Service";

export default function Services() {
   return (
      <section className="services container">
         <h2 className="services__title">We’re different</h2>

         <main className="services__main">
            <Service
               image="/icon-snappy-process.svg"
               name="Snappy process"
               description="Our application process can be completed in minutes, not hours. Don’t get
  stuck filling in tedious forms."
            />
            <Service
               image="/icon-affordable-prices.svg"
               name="Affordable prices"
               description="We don’t want you worrying about high monthly costs. Our prices may be low, 
  but we still offer the best coverage possible."
            />
            <Service
               image="/icon-snappy-process.svg"
               name="People first"
               description="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
  sure you’re covered when you need it."
            />
         </main>
      </section>
   )
}

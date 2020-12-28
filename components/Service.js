
export default function Service({ image, name, description }) {
   return (
      <article className="services__item">
         <img className="services__icon" src={image} alt="" />
         <h3 className="services__name">{name}</h3>
         <p className="services__description">{description}</p>
      </article>
   )
}

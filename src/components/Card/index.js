export default function Card() {
    return(
        <article className="cart">
            <div className="cart__img">
              <img src="https://rickandmortyapi.com/api/character/avatar/162.jpeg" alt="Ice-T" />
            </div>
            <div className="card__content">
              <h1>Ice-T </h1>      
              <span>Alive - Alien</span>
            </div>
        </article>
    )
}
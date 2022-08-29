

function App() {
  return (
    <>
      <section className="detail">
        <div>
          <article><div className="img">
            <img src="https://rickandmortyapi.com/api/character/avatar/162.jpeg" alt="Ice-T" />
          </div>
            <div className="content">
              <h1>Ice-T</h1>
              <h2>Alive - Alien</h2>
              <h3>Last known location:</h3>
              <p>Alphabetrium</p>
              <h3>First seen in:</h3>
              <p>Get Schwifty</p>
            </div>
          </article>
        </div>
      </section>
      <section>
        <header><h1></h1></header>
        <main>
          <article>
            <div className="img">
              <img src="https://rickandmortyapi.com/api/character/avatar/162.jpeg" alt="Ice-T" />
            </div>
            <div className="content">
              <h1>Ice-T <span>Alive - Alien</span></h1>      
              
            </div>
          </article>
        </main>
        <footer>CHARACTERS: 826  LOCATIONS: 126 EPISODES: 51</footer></section>

    </>

  );
}

export default App;

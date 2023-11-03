import "./style/development.css"

function Development(pops) {
    return(<>
    <section id="developmentPC">
  <article className="frame6">
    <img
      className="frame6__img"
      src="imagenes/portfolio 1.jpg"
      alt="portfolio"
    />
    <section className="frame5__0">
      <section className="frame4">
        <p className="frame4__p02">
          <strong>{pops.tikers}</strong>
        </p>
        <br />
        <p className="frame4__p03">
          <strong>{pops.title}</strong>
        </p>
      </section>
      <p className="frame5__p">
        In this project, I work with HTML and CSS to create a responsive page .{" "}
        <br />
        The design is from devchallenge.io. Donec aliquam est dui, vel
        vestibulum <br />
        diam sollicitudin id. Quisque feugiat malesuada molestie.
      </p>
      <p className="frame5__p__mobile">
        In this project, I work with HTML and CSS to
        <br />
        create a responsive page .The design is from
        <br />
        devchallenge.io. Donec aliquam est dui, vel
        <br />
        vestibulum diam sollicitudin id. Quisque
        <br />
        feugiat malesuada molestie.
      </p>
      <br />
      <section className="frame1__buttons">
        <button className="btnBlue" id="btnDemo">
         <p className="btnPBlue"><a href="https://github.com/4ronDuart3/Aron-Duarte-entrega03" target="blank">Demo</a></p>
        </button>
       <button className="btn" id="btnCode">
         <p className="btnP"><a href="https://github.com/4ronDuart3/Aron-Duarte-entrega03/tags/Aron-Duarte-entrega03" target="blank">Code</a></p>
       </button>
      </section>
    </section>
  </article>
</section>
    </>)
}

export default Development
import "./style/header.css"

function Header() {
  return (
    <>
    <header id="header">
  <img src="imagenes/Rectangle 1.jpg" className="header__img" />
  <article className="frame5">
    <section className="frame4__header">
      <article className="frame1">
        <p className="frame1__p">
          <strong>Nombre</strong>
        </p>
        <p className="frame1__p2">Front-end developer</p>
      </article>
      <article className="frame1__2">
        <article className="frame1__icons">
          <img className="icon" src="icons/envelope.png" alt="envelope" />
          <p className="icon__p">
            <strong>ejemplo@mail.com</strong>
          </p>
        </article>
        <article className="frame1__icons">
          <img className="icon" src="icons/phone.png" alt="phone" />
          <p className="icon__p">
            <strong>+54 9 11-1234-5678</strong>
          </p>
        </article>
      </article>
    </section>
    <p className="frame4__p">
      Self-motivated developer, who is willing to learn and create <br />
      outstanding UI applications. <br />
      <br />
      Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque <br />
      feugiat malesuada molestie.
    </p>
  </article>
</header>
    </>
  )
}

export default Header
import "../style/header.css"

function HeaderMobile(){
    return(<><section id="header__mobile">
    <header className="header-frame6">
      <img className="header__img" src="public/Rectangle 1.jpg"/>
      <article className="header__div-frame5">
        <article className="header__div-frame4">
          <article className="header__div-frame1">
            <h1 className="frame1__p1">Nombre</h1>
            <h2 className="frame1__p2">Front-end developer</h2>
          </article>
          <article className="header__div-frame1__2">
            <article className="frame1__2-png">
              <img id="png__header" src="public/envelope.png" alt="envelope" />
              <strong> ejemplo@mail.com</strong>
            </article>
            <article className="frame1__2-png">
              <img id="png__header" src="public/phone.png" alt="phone" />{" "}
              <strong> +54 9 11-1234-5678</strong>
            </article>
          </article>
        </article>
        <p className="header__p">
          Self-motivated developer, who is willing to <br />
          learn and create outstanding UI <br />
          applications.
        </p>
      </article>
    </header>
  </section>
  </>)
}

export default HeaderMobile
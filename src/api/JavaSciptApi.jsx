import { useEffect } from "react"
import { useState } from "react"
import Loader from "../Loader"

const JavaSciptApi = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true);
        fetch("https://my-json-server.typicode.com/4ronDuart3/Api-Json/proyect")
        .then(response => {
            if(!response.ok) throw "Hubo un error";

            return response.json();
        })
        .then(data => setData(data))
        .catch(err => console.log(err))
        setLoading(false);
    }, []);
    return(
      <div>
          { loading && <Loader />}
            {data.map(data =><div key={data.titleJav}>
                <section id="developmentPC">
  <article className="frame6Api">
    <img
      className="frame6__img"
      src="public/portfolio 1.jpg"
      alt="portfolio"
    />
    <section className="frame5__0">
      <section className="frame4">
        <p className="frame4__p02">
          <strong>{data.tikerJav}</strong>
        </p>
        <br />
        <p className="frame4__p03">
          <strong>{data.titleJav}</strong>
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
            </div>
            )}
        </div>
    )
}

export default JavaSciptApi 
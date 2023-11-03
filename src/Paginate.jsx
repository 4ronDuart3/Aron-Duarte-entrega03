import "./style/paginate.css"

function Paginate(){
    return(<>
<section id="paginate">
  <article className="framebox">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M18 16.8596L16.227 18L0 9L16.227 0L18 1.14043L3.8295 9L18 16.8596Z"
        fill="#4F4F4F"
      />
    </svg>
  </article>
  <article className="framebox --boxp1">
    <p className="framebox__p">1</p>
  </article>
  <article className="framebox --boxp2">
    <p className="framebox__p">2</p>
  </article>
  <article className="framebox --boxp3">
    <p className="framebox__p">3</p>
  </article>
  <article className="framebox --frame23">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
    >
      <circle cx={4} cy={4} r={4} fill="#4F4F4F" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
    >
      <circle cx={4} cy={4} r={4} fill="#4F4F4F" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
    >
      <circle cx={4} cy={4} r={4} fill="#4F4F4F" />
    </svg>
  </article>
  <article className="framebox --boxp1">
    <p className="framebox__p">10</p>
  </article>
  <article className="framebox">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M0 1.14043L1.773 0L18 9L1.773 18L0 16.8596L14.1705 9L0 1.14043Z"
        fill="#4F4F4F"
      />
    </svg>
  </article>
</section>
    </>)
}

export default Paginate
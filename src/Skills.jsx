import "./style/skills.css"

function Skills (){
    return(
        <section className="skills">
  <p className="skills__p">Skills</p>
  <article className="skills__frame1">
    <section className="frame1__bars">
      <div className="frame11">
        <p className="frame11__p">HTML</p>
        <div className="frame7">
          <div className="frame7__lvl"></div>
        </div>
      </div>
      <div className="frame8">
        <p className="frame11__p">CSS</p>
        <div className="frame7">
          <div className="frame7__lvl02" />
        </div>
      </div>
      <div className="frame11">
        <p className="frame11__p">JS</p>
        <div className="frame7">
          <div className="frame7__lvl"></div>
        </div>
      </div>
      <div className="frame8">
        <p className="frame11__p">React</p>
        <div className="frame7">
          <div className="frame7__lvl02" />
        </div>
      </div>
    </section>
  </article>
</section>
    )
}

export default Skills
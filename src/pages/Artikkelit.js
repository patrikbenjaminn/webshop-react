import React from 'react'
import '../styles/Artikkelit.css'

function Artikkelit() {
  return (
    
    
    <section className="artikkelit">
      <div className="container py-5">
        <h1 className="text-center">Viimeisimmät uutiset</h1>
        <div className="row py-5">
          <div className="col-lg-4">
            <div className="card">
              <img src="../../images/girl.jpg" className="img-fluid" alt=""/>
              <p className="pt-3"><a href=
              "https://www.afterdawn.com/news/article.cfm/2022/12/08/guide-wifi-speeds-are-slow-here-are-some-tips">
                Wi-Fi hidas?</a></p>
              <small> Tässä muutama vinkki!<span></span></small>
            </div>
          </div>
              <div className="col-lg-4">
               <div className="card">
                 <img src="../../images/vr gamer.jpg" className="img-fluid" alt=""/>
                 <p className="pt-3"><a href="https://yle.fi/aihe/t/18-894">VR nyt.</a></p>
                 <small>Yle.fi<span></span></small>
               </div>
             </div>
             <div className="col-lg-4">
               <div className="card">
                <img src="../../images/boardgames.jpg" className="img-fluid" alt=""/>
                <p className="pt-3"><a href="https://www.lautapeliopas.fi/aiheet/uutiset/">Lautapeliopas</a></p>
                <small>Aiheet ja uutiset<span></span></small>
               </div>
              </div>
            </div>
          </div>
          </section>
  )
}

export default Artikkelit
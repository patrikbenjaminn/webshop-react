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
              <p className=""pt-3><a href="/">Onko ulkona elämää?</a></p>
              <small>By Admin / <span>Lifestyle</span></small>
            </div>
          </div>
              <div className="col-lg-4">
               <div className="card">
                 <img src="../../images/vr gamer.jpg" className="img-fluid" alt=""/>
                 <p className=""pt-3><a href="/">Virtuaalitodellisuus nyt.</a></p>
                 <small>By Admin / <span>Lifestyle</span></small>
               </div>
             </div>
             <div className="col-lg-4">
               <div className="card">
                <img src="../../images/boardgames.jpg" className="img-fluid" alt=""/>
                <p className=""pt-3><a href="/">Lautapelien uusi tuleminen.</a></p>
                <small>By Admin / <span>Lifestyle</span></small>
               </div>
              </div>
            </div>
          </div>
          </section>
  )
}

export default Artikkelit
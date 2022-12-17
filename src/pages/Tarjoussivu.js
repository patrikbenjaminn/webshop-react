import React from 'react'
import '../styles/Tarjoussivu.css'
import '../pages/Tuotteet'
function Tarjoussivu() {
  return (
    
    <section className="tarjoukset" style={{ textalign: "center"}}>
      <div className="container py-5">
        <h1 className="text-center">Päivän tarjoukset</h1>
        <div className="row py-5">
          <div className="col-lg-3">
            <div className="card h-100">
              <img src="../images/Video Game Console.H03.2k.png" className="img-fluid mb-3" alt=""/>
              <input type="button" value="OSTA TÄSTÄ"/>   
              <h5>Tuotenimi</h5>
              <p className=''><small><del>80€</del><span>60€</span></small></p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100">
              <img src="../images/Snail Ring Game.H03.2k.png" className="img-fluid mb-3" alt=""/>
              <input type="button" value="OSTA TÄSTÄ"/>
              <h5>Tuotenimi</h5>
              <p className=''><small><del>80€</del><span>60€</span></small></p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100">
              <img src="../images/Hockey Table.H03.2k.png" className="img-fluid mb-3" alt=""/>
              <input type="button" value="OSTA TÄSTÄ"/>
              <h5>Tuotenimi</h5>
              <p className=''><small><del>80€</del><span>60€</span></small></p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100">
              <img src="../images/old-video-game-2022-10-14-18-25-41-utc-removebg-preview.png" className="img-fluid mb-3" alt=""/>
              <input type="button" value="OSTA TÄSTÄ"/>
              <h5>Tuotenimi</h5>
              <p className=''><small><del>80€</del><span>60€</span></small></p>
            </div>
          </div>
        </div>
      </div>
    </section>
        
  )
}

export default Tarjoussivu
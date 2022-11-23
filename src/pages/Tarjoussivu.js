import React from 'react'

function Tarjoussivu() {
  return (
    
    <section class="tarjoukset" style={{ textalign: "center"}}>
      <div class="container py-5">
        <h1 class="text-center">Päivän tarjoukset</h1>
        <div class="row py-5">
          <div class="col-lg-3">
            <div class="card h-100">
              <img src="../images/Video Game Console.H03.2k.png" class="img-fluid mb-3" alt=""/>
              <input type="button" value="OSTA TÄSTÄ"/>
              <h5>Tuotenimi</h5>
              <p><small><del>80€</del><span>60€</span></small></p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card h-100">
              <img src="../images/Snail Ring Game.H03.2k.png" class="img-fluid mb-3" alt=""/>
              <input type="button" value="OSTA TÄSTÄ"/>
              <h5>Tuotenimi</h5>
              <p><small><del>80€</del><span>60€</span></small></p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card h-100">
              <img src="../images/Hockey Table.H03.2k.png" class="img-fluid mb-3" alt=""/>
              <input type="button" value="OSTA TÄSTÄ"/>
              <h5>Tuotenimi</h5>
              <p><small><del>80€</del><span>60€</span></small></p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card h-100">
              <img src="../images/old-video-game-2022-10-14-18-25-41-utc-removebg-preview.png" class="img-fluid mb-3" alt=""/>
              <input type="button" value="OSTA TÄSTÄ"/>
              <h5>Tuotenimi</h5>
              <p><small><del>80€</del><span>60€</span></small></p>
            </div>
          </div>
        </div>
      </div>
    </section>
        
  )
}

export default Tarjoussivu
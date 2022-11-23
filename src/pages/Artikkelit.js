import React from 'react'

function Artikkelit() {
  return (
    
    
    <section class="artikkelit">
      <div class="container py-5">
        <h1 class="text-center">Viimeisimmät uutiset</h1>
        <div class="row py-5">
          <div class="col-lg-4">
            <div class="card">
              <img src="../../images/girl.jpg" class="img-fluid" alt=""/>
              <p class=""pt-3><a href="/">Onko ulkona elämää?</a></p>
              <small>By Admin / <span>Lifestyle</span></small>
            </div>
          </div>
              <div class="col-lg-4">
               <div class="card">
                 <img src="../../images/vr gamer.jpg" class="img-fluid" alt=""/>
                 <p class=""pt-3><a href="/">Virtuaalitodellisuus nyt.</a></p>
                 <small>By Admin / <span>Lifestyle</span></small>
               </div>
             </div>
             <div class="col-lg-4">
               <div class="card">
                <img src="../../images/boardgames.jpg" class="img-fluid" alt=""/>
                <p class=""pt-3><a href="/">Lautapelien uusi tuleminen.</a></p>
                <small>By Admin / <span>Lifestyle</span></small>
               </div>
              </div>
            </div>
          </div>
          </section>
  )
}

export default Artikkelit
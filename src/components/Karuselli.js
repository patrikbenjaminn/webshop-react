import React from 'react'

function Karuselli() {
  return (
  

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-interval="2000">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/shakki.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <p1>Tällä viikolla</p1>
              <h1>KAIKKI lautapelit -20%</h1>
              <h1>Nopeat syövät hitaat</h1>
              <button class="btn0 mt-3 ml-2">TILAA HETI</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/ohjain.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <div class="container">
          <div class="row justify-content-start text-left">
            <div class="col-lg-8 mx-auto">
              <p1>Tällä viikolla</p1>
              <h1>KAIKKI konsolitarvikkeet -20%</h1>
              <h1>Nopeat syövät hitaat</h1>
              <button class="btn0 mt-3 ml-2">TILAA HETI</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/videopeli.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <p1>Tällä viikolla</p1>
              <h1>KAIKILLE TILAAJILLE YLLÄTYS!</h1>
              <h1>Nopeat syövät hitaat</h1>
              <button class="btn0 mt-3 ml-2">TILAA HETI</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


  )
}

export default Karuselli
import React from 'react'

function Slider() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2023/12/16/00/06/mountain-8451604_1280.jpg" height={680} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138_1280.jpg" className="d-block w-100" alt="..." height={680} width={800}/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2023/01/08/05/52/sunset-7704594_1280.jpg" className="d-block w-100" alt="..." height={680}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider

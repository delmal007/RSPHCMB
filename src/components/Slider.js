import React from 'react'
import './Slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PIC from '../images/slider.png';

const Slider = () => {
  return (
    <div className='slider'>
      <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={PIC} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={PIC} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={PIC} class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='inner'>
        <div className='inner-slider'>
          <div className='date'>
            10 DECEMBER 2021 - COVID-19 UPDATE
          </div>
          <div className='card-title1'>
            <h4>Etiam eu odio in sapien posuere dole vitae bibendum vitae lorem.</h4>
          </div>
          <div className='card-body1'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra vulputate fringilla purus morbi. Curabitur enim amet adipiscing ornare volutpat lacus, vulputate. Sollicitudin ultrices sit sapien, amet quisque tortor sit auctor. Libero arcu tempor suspendisse sit. Ultrices enim velit non ipsum. Volutpat etiam placerat adipiscing dui sit.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Slider
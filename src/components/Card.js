import React from 'react'
import './Card.css'
import PIC from '../images/drug.png'
import PIC1 from '../images/pic.png'
import PIC2 from '../images/pic2.png'

const Card = () => {
  return (
    <div className='card'>
      <div className='title'>
        <h3>Latest News & Update</h3>
      </div>
      <div className='card-container'>

        <div className='card-contain'>
          <div className='image-container'>
            <img src={PIC} alt=''/>
          </div>
          <div className='card-content'>
            <div className='date'>
              11 DECEMBER 2021 - HEALTH NEWS
            </div>
            <div className='card-title'>
              <h4>Suspendisse viverra massa eget nibh ultricies mollis</h4>
            </div>
            <div className='card-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor</p>
            </div>
          </div>
        </div>
      

        <div className='card-contain'>
          <div className='image-container'>
            <img src={PIC1} alt=''/>
          </div>
          <div className='card-content'>
            <div className='date'>
            11 DECEMBER 2021 - HEALTH NEWS
            </div>              
            <div className='card-title'>
              <h4>Suspendisse viverra massa eget nibh ultricies mollis</h4>
            </div>
            <div className='card-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor</p>
            </div>
          </div>
        </div>

        <div className='card-contain'>
          <div className='image-container'>
            <img src={PIC2} alt=''/>
          </div>
          <div className='card-content'>
            <div className='date'>
              11 DECEMBER 2021 - HEALTH NEWS
            </div>
            <div className='card-title'>
              <h4>Suspendisse viverra massa eget nibh ultricies mollis</h4>
            </div>
            <div className='card-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor</p>
            </div>
          </div>
        </div>
      </div> 
      <button className='btn'>More post</button>  
    </div>
  )
}

export default Card
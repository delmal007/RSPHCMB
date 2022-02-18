import React from 'react'
import './Card1.css'
import PIC3 from '../images/checkup.png'
import PIC4 from '../images/tools.png'
import PIC5 from '../images/tools1.png'
import PIC6 from '../images/test.png'

const Card1 = () => {
  return (
    <div className='container'>
      <div className='card1'>
        <div className='title1'>
          <h3>Latest News & Update</h3>
        </div>
        <div className='card-container1'>

          <div className='card-contain1'>
            <div className='image-container1'>
              <img src={PIC3} alt=''/>
            </div>
            <div className='card-content1'>
              <div className='date1'>
                11 DECEMBER 2021 - HEALTH NEWS
              </div>
              <div className='card-title1'>
                <h4>Suspendisse viverra massa eget nibh ultricies mollis</h4>
              </div>
              <div className='card-body1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor</p>
              </div>
            </div>
          </div>
        

          <div className='card-contain1'>
            <div className='image-container1'>
              <img src={PIC4} alt=''/>
            </div>
            <div className='card-content1'>
              <div className='date1'>
              11 DECEMBER 2021 - HEALTH NEWS
              </div>              
              <div className='card-title1'>
                <h4>Suspendisse viverra massa eget nibh ultricies mollis</h4>
              </div>
              <div className='card-body1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor</p>
              </div>
            </div>
          </div>

          <div className='card-contain1'>
            <div className='image-container1'>
              <img src={PIC5} alt=''/>
            </div>
            <div className='card-content1'>
              <div className='date'>
                11 DECEMBER 2021 - HEALTH NEWS
              </div>
              <div className='card-title1'>
                <h4>Suspendisse viverra massa eget nibh ultricies mollis</h4>
              </div>
              <div className='card-body1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor</p>
              </div>
            </div>
          </div>
          <div className='card-contain1'>
            <div className='image-container1'>
              <img src={PIC6} alt=''/>
            </div>
            <div className='card-content1'>
              <div className='date'>
                11 DECEMBER 2021 - HEALTH NEWS
              </div>
              <div className='card-title1'>
                <h4>Suspendisse viverra massa eget nibh ultricies mollis</h4>
              </div>
              <div className='card-body1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor</p>
              </div>
            </div>
          </div>
        </div> 
        <button className='btn1'>More post</button>  
      </div>
      <div className='card2'>
        <div className='title1'>
          <h3>Categories</h3>
        </div>
        <ul className='cate'>
          <li>News and Update</li>
          <hr/>
          <li>Event</li>
          <hr/>
          <li>Upcoming campaign</li>
          <hr/>
          <li>Covid-19</li>
          <hr/>
          <li>Newsletters</li>
          <hr/>
          <li>Ebola virus</li>
          <hr/>
          <li>HIV/Aids</li>
          <hr/>
          <li>Cancer</li>
          <hr/>
          <li>Malaria</li>
          <hr/>
          <li>Hepatitis B</li>
          <hr/>
          <li>Air pollution</li>
        </ul>
      </div>
    </div>
  )
}

export default Card1
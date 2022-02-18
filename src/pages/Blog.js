import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Card from '../components/Card'
import Card1 from '../components/Card1';
// import PIC from '../images/drug.png'


function Blog() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Card/>
      <Card1/>
      {/* <div className="App">
        <div className="ThreeCards">
        <Card 
        title="Suspendisse viverra massa eget nibh ultricies mollis"
        imageUrl={PIC}
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor."
        />
        </div>
</div> */}

    </div>
  )
}

export default Blog
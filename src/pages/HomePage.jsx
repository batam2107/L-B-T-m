import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../images/Banner_1.jpg'
import Banner2 from '../images/Banner_2.png'
import Banner3 from '../images/Banner_3.png'
import NewEvent from '../components/NewEvent';
import { News } from '../news';

export default function HomePage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
  return (
    
    <div>
        <div className='fpt'>
            <span>PHÒNG QUAN HỆ DOANH NGHIỆP</span>
            <span>ĐẠI HỌC FPT CẦN THƠ</span>
        </div>
        <div className='py-2 container'>
             <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img src={Banner1} text="First slide "className='d-block w-100 h-100'/>
    </Carousel.Item>
    <Carousel.Item>
      <img src={Banner2} text="Second slide "className='d-block w-100 h-100' />
    
    </Carousel.Item>
    <Carousel.Item>
      <img src={Banner3}text="Third slide"className='d-block w-100 h-100'/>
      
    </Carousel.Item>
  </Carousel>
        </div>
         <div className='content container'>
             <h1>TIN TỨC & SỰ KIÊN</h1>
             <div className='row'>
                {
                    News.map((item) => (
                        <div className='col-4' key={item?.id}>
                        <NewEvent 
                        title={item?.title}
                        date={item?.date}
                        image={item?.image}
                        description={item?.description}
                        id={item?.id}
                        />
                        </div>
                    ))
                }

             </div>
       
         </div>
       
    </div>

);
}


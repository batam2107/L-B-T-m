import React from 'react'
import { Link } from 'react-router-dom'


export default function NewEvent(props) {
   
  return (
    <div className='blog py-3'>
          
             <img src={props?.image} className='img container' />
        
          <div className='context py-4 '>
               <h4>{props?.title}</h4>
               <p className='description'>{props?.description}</p>
              
           </div>
           <div className='button-2'>
            <Link to={`/news/${props?.id}`}>
            <button className='check-button'>Xem Thêm</button>
            </Link>
           </div>
    <div className='date-absolute'>{props?.date} | Leave a comment</div>
    </div>

  )

}

import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { News } from '../news'
import back from '../images/back.png'

export default function EventDetail() {
    const {id} = useParams()
    const navigate = useNavigate()
  return (
    <div>
        {
            News.map((item => {
                if(item?.id != id) return null;
                return (
                    <div className='blog py-3'>

                 <div className='context_hai'>
                      <h1>{item?.title}</h1>
                      <p className='des'>{item?.description}</p>
                     
                  </div>
                  <img src={back} className='back'
                  onClick={(e) => navigate(`/`)}
                  />

           </div>
                )
            }))
        }
    </div>

  )
}

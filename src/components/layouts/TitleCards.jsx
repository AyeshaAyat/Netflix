import React from 'react'
import cards_data from '../../assets/cards/Cards_data'
import Container from '../Container'
const TitleCards = () => {
  return (
   <>
  
<Container>

    <div className="titleCards mb-[6px] p-2 ">
        <h2 className='mb-4 text-[16px]'>Popular on Netflix</h2>
        <div className="cardlist flex gap-x-3 overflow-x-scroll  relative">
          
            {cards_data.map((card, index)=>{
              return (
                <div className="singleCard ">
                 
<div className="w-[180px] ">

              <img src={card.image} alt='cardImage' className='object-contain object-center rounded-[4px] cursor-pointer ' />
</div>
               
              <p className=' absolute bottom-1 pl-1 font-semibold text-[12px] whitespace-nowrap'>{card.name}</p>
            </div>
           )
          })}
        </div>
    </div>
        
          </Container>
    
    </>
  )
}

export default TitleCards
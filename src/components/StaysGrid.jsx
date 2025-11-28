import React from 'react'
import StayCard from './StayCard'

function StaysGrid(props) {
  console.log("StaysGrid rendering with " + props.stays.length + " stays")

  return (
    <main>
      <div className="flex relative justify-between items-center w-full h-10 p-6">
        <h2 className="text-xl"><strong>Stays in Finland</strong></h2>
        <h4 className="text-sm md:text-[16px] lg:text-[18px] text-gray-500">
          {props.stays.length > 12 ? "12+" : props.stays.length} stays
        </h4>
      </div>
      
      <section 
        className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
        style={{ minHeight: '500px' }} 
      >
        {props.stays.map((stay, index) => (
          <StayCard key={index} data={stay} />
        ))}
      </section>
    </main>
  )
}

export default StaysGrid

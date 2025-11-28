import React from 'react'
// logo import removed


function Header(props) {
  console.log("Header rendering")

  const [localLocation, setLocalLocation] = React.useState(props.location)
  
  const uniqueLocations = [...new Set(props.allStays.map(stay => `${stay.city}, ${stay.country}`))]

  return (
    <header className="flex flex-col justify-center items-start sm:items-center sm:justify-between sm:flex-row py-2 px-6">
      <div className="logo-container">
        <img src="/logo.svg" alt="logo" style={{ cursor: 'pointer' }} /> 
      </div>

      <div 
        className="search-bar flex m-3 shadow-md rounded-2xl justify-center items-center divide-x divide-gray-200"
        onClick={() => props.setModalOpen(true)}
      >
        <div className="px-4 py-2 cursor-pointer hover:bg-gray-50">
          {props.location || "Add location"}
        </div>
        <div className="px-4 py-2 cursor-pointer hover:bg-gray-50 text-gray-400">
          {props.guests > 0 ? `${props.guests} guests` : "Add guests"}
        </div>
        <div className="px-4 py-2">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {props.modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col" style={{ height: '100vh' }}>
          <div className="bg-white p-4">
            <div className="flex justify-between items-center mb-4">
                <span>Edit your search</span>
                <button onClick={() => props.setModalOpen(false)}>X</button>
            </div>
            
            <div className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden mb-4">
                <div className="flex-1 p-4 border-b md:border-b-0 md:border-r">
                    <label className="block text-xs font-bold uppercase">Location</label>
                    <input 
                        type="text" 
                        placeholder="Add location" 
                        className="w-full outline-none"
                        value={localLocation}
                        readOnly
                    />
                </div>
                <div className="flex-1 p-4 border-b md:border-b-0 md:border-r">
                    <label className="block text-xs font-bold uppercase">Guests</label>
                    <input 
                        type="text" 
                        placeholder="Add guests" 
                        className="w-full outline-none"
                        value={props.adults + props.children > 0 ? `${props.adults + props.children} guests` : ''}
                        readOnly
                    />
                </div>
                <div className="flex-0 p-2 flex items-center justify-center">
                    <button 
                        className="bg-red-500 text-white px-6 py-2 rounded-2xl flex items-center gap-2"
                        onClick={() => props.handleSearch(localLocation, props.adults, props.children)}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Search
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-4">
                    {uniqueLocations.map((loc, index) => (
                        <div 
                            key={index}
                            className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => setLocalLocation(loc)}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {loc}
                        </div>
                    ))}
                </div>
                <div className="flex-1 p-4">
                    <div className="mb-6">
                        <h3 className="font-bold">Adults</h3>
                        <p className="text-gray-400 text-sm">Ages 13 or above</p>
                        <div className="flex items-center gap-4 mt-2">
                            <button className="w-8 h-8 border border-gray-400 rounded text-gray-400" onClick={() => props.setAdults(Math.max(0, props.adults - 1))}>-</button>
                            <span>{props.adults}</span>
                            <button className="w-8 h-8 border border-gray-400 rounded text-gray-400" onClick={() => props.setAdults(props.adults + 1)}>+</button>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold">Children</h3>
                        <p className="text-gray-400 text-sm">Ages 2-12</p>
                        <div className="flex items-center gap-4 mt-2">
                            <button className="w-8 h-8 border border-gray-400 rounded text-gray-400" onClick={() => props.setChildren(Math.max(0, props.children - 1))}>-</button>
                            <span>{props.children}</span>
                            <button className="w-8 h-8 border border-gray-400 rounded text-gray-400" onClick={() => props.setChildren(props.children + 1)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

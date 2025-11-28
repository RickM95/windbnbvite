import { useState, useEffect } from 'react'

import staysData from './components/stays.jsx'
import Header from './components/Header'
import StaysGrid from './components/StaysGrid'

function App() {
  const [stays, setStays] = useState(staysData)
  const [filteredStays, setFilteredStays] = useState(staysData)
  const [location, setLocation] = useState('')
  const [guests, setGuests] = useState(0)
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  console.log("App rendering...")

  useEffect(() => {
    console.log("Filtering stays...")
    let result = stays;

    if (location) {
      result = result.filter(stay => {
        return `${stay.city}, ${stay.country}` === location
      })
    }

    if (guests > 0) {
      result = result.filter(stay => stay.maxGuests >= guests)
    }

    setFilteredStays(result)
  }, [location, guests, stays])

  const handleSearch = (loc, adultCount, childCount) => {
    console.log("Search clicked", loc, adultCount, childCount)
    setLocation(loc)
    setAdults(adultCount)
    setChildren(childCount)
    setGuests(adultCount + childCount)
    setModalOpen(false)
  }

  return (
    <div className="App">
      <Header 
        location={location}
        guests={guests}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        handleSearch={handleSearch}
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
        allStays={stays}
      />
      
      <StaysGrid stays={filteredStays} />
      
      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#828282' }}>
        created by <span style={{ fontWeight: 'bold' }}>RickM95</span> - devChallenges.io
      </footer>
    </div>
  )
}

export default App

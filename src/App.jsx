import { useState, createContext, useEffect } from "react"
import Countries from "./Countries";

export const countriesContext = createContext();
function App() {
  const [countries, setCountries] = useState([])

  async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    setCountries(data)
  }
  useEffect(() => {
    fetchCountries()
  }, [])


  return (
    <countriesContext.Provider value={{ countries, setCountries }}>
      <Countries />
    </countriesContext.Provider>
  )
}

export default App



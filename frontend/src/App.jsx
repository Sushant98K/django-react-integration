import { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL);
      
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}cores`)
        if (!response) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        console.log(result);
        setData(result)
      } catch (error) {
        console.error('Error Fetching data', error);
      }
    }
    fetchData()

  }, []);

  return (
    <>
      <h1>Test</h1>
    </>
  )
}

export default App
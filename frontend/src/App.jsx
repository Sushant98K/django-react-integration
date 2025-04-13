import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

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

  const [productData, setProductData] = useState([]);

  const endpoint = `${import.meta.env.VITE_API_URL}products/`

  const fetchData = async () => {
    console.log('fetching...');
    const response = await axios.get(endpoint)
    console.log(response);

    const { data } = response
    setProductData(data)
    console.log(data);
    return data   
    
  }

  useEffect(() => {
    fetchData()
  }, []);


  const postData = async () => {
    const name = 'product test x'
    const description = 'product test description x'
    const body = { name, description }
    
    const response = await axios.post(endpoint, body)
    console.log(response);
    return response.data
    
  }

  const handleSendData = async () => {
    const newData = await postData()
    if (newData) {
      setProductData((prevData)=>[...prevData, newData])
    }
  }

  return (
    <>
      <h1>Cores Test</h1>
      <ul>
        {
          data.map(item => <li key={item.id}>{item.title}</li>)
        }
      </ul>
      <h1>Product Test</h1>
      <ul>
      {
          productData.map(el => (
            <React.Fragment key={el.id}>
              <li>{el.name}</li>
              <li>{ el.description}</li>
            </React.Fragment>
        ))
      }
      </ul>
      <button onClick={handleSendData}>Create Data</button>
    </>
  )
}

export default App
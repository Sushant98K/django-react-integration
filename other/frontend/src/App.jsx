import React, { useEffect, useState } from 'react'
import './App.css'
import axios, { Axios } from 'axios'

const App = () => {

  const [productData, setProductData] = useState([]);

  const endpoint = `${import.meta.env.VITE_API_URL}products/`

  const fetchData = async () => {
    console.log('fetching ...');
    const response = await axios.get(endpoint)
    console.log(response);
    
    const { data } = response
    setProductData(data)
    console.log(data);
    return data
    
    
  }

  const [count, setCount] = useState(2);

  const postData = async () => {
    console.log('posting ...');
    const name = `Test PRoduct ${count}`
    const description = `Test Description Product ${count}`
    const body = { name, description }
    
    const response = await axios.post(endpoint, body)
    console.log(response);
    return response.data
    
  }

  const handleData = async () => {
    setCount(count + 1)
    const newData = await postData()
    if (newData) {
      setProductData((prevData)=>[...prevData, newData])
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <h1>Product Details</h1>
      <ul>
      {
          productData.map(el => (
            <React.Fragment key={el.id}>
              <li>{ el.name}</li>
              <li>{ el.description}</li>
          </React.Fragment>
        ))
      }
      </ul>

      <button onClick={handleData}>Click to Create New Data</button>
    </>
  )
}

export default App
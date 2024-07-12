import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [arrays, setArrays] = useState ([])

  useEffect(() => {
    axios.get('/api/arrays')
    .then((response) => {
      setArrays(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <div>
        <h1>ARRAYS of Arrays</h1>
        <p>ARRAYS: {arrays.length}</p>  
      </div>

    {
      arrays.map((array) => (
        <div key ={array.id}>
          <h2>{array.title}</h2>
          <p>{array.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App

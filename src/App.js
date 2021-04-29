import './App.css'
import React,{useState, useEffect} from 'react'
import Loading from './component/Loading/Loading.jsx'
import Hotel from './component/Hotel/Hotel.jsx'

const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)
    setData([])
   
fetch(`api/hotels`)

    .then( (response) => (response.json()))
    .then( (resadat) => (setData(resadat)))
    .catch( (error) => {
                        console.log('error', error);
                        setData(null);
                      } )
    .finally(() => {
                  console.log('fetch end');
                  setLoading(false);
                })


  return () => {
   // cleanup
  }
}, [])

console.log('data=',data);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {loading && <Loading/>}

        {
          (data === null) 
                          ? <p>Upps Soemthing happend!</p>
                          : data.map((hotel) => (

                                                    <Hotel hotel={hotel}/>
                                                )
                                    )
        }
    

    </div>
  )
}

export default App

import { useState, useEffect } from "react"

const App = ()=>{
  const [photos, setPhotos] = useState([])

  useEffect(()=>{
    test()
  }, [])

  const test = async ()=>{
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setPhotos(data)
    }
    catch(error)
    {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Testing</h1>
      <button onClick={test} style={{display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'0 auto',background:'blue',color:'white'}}>Test</button>
      <div style={{
        margin: '50px auto',
        width: '90%',
        display: 'flex',
        gap: 48,
        flexWrap: "wrap",
        justifyContent: 'center'
      }}>
        {
          photos.map((item, index)=>(
            <div key={index} style={{
              width: "calc(25% - 48px)",
              border: '1px solid #ccc',
              padding: 16,
              boxSizing: 'border-box',
              borderRadius: 8,
              boxShadow: '0 0 8px #ddd',
              textAlign: 'center'
            }}>
              <img src={item.image} width="180" />
              <h3 style={{padding: 0, marginBottom: 6}}>{item.title}</h3>
              <p style={{color: 'gray', padding: 0, marginBottom: 2}}>{item.description.slice(0, 75)}</p>
              <p style={{textTransform: 'capitalize', padding: 0, margin: 0}}>{item.category}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App

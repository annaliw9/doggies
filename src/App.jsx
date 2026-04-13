import { useEffect, useState } from "react"

function App() {
  const [dog, setDog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_KEY = import.meta.env.API_KEY;
  const URL = "https://api.thedogapi.com/v1/images/search?limit=10"

  const fetchDogs = async () => {
    try { 

      setLoading(true);
      setError(null);

      const res = await fetch(URL, {
        headers: {
          "x-api-key": API_KEY,
        }
      })

      if (!res.ok) {
        throw new Error("Failed to fetch dog image");
      }

      const data = await res.json();
      setDog(data);
      console.log(data)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDogs()
  }, [])
  
  if (loading) return <p>Dogs Loading</p>
  if (error) return <p>Error: {error} </p>
  
  return (
    <div>
      <h1>Dog Gallery</h1>
      <div>
        {dog.map(d => <img src={d.url} alt="dog" width='300'></img>)}
      </div>
    </div>
  )
}

export default App


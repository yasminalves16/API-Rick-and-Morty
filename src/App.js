import { useEffect, useState } from "react";
import "./App.css";
import Chacaters from "./Components/Characters";

function App() {
  const [charactersList, setCharactersList] = useState([]);

  const [currentPage, setcurrentPage] = useState('https://rickandmortyapi.com/api/character/.')

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch({currentPage})

      const jsonResponse = await response.json();
      setCharactersList(jsonResponse.results);
    }

    fetchResponse();
  }, [])

  
  return (
    <div>
      <Chacaters charactersList={charactersList} />
      <button onClick={}></button>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Chacaters from "./Components/Characters";

function App() {
  const [charactersList, setCharactersList] = useState([]);

  const [currentPage, setcurrentPage] = useState('https://rickandmortyapi.com/api/character/');

  const [info, setInfo] = useState('');


  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch(currentPage);

      const jsonResponse = await response.json();

      setCharactersList(jsonResponse.results);
      setInfo(jsonResponse.info)
    };

    fetchResponse();
  }, [currentPage, info]);
  

  const previousPage = () => {
    if (info.prev !== null) {
      setcurrentPage(info.prev);
    }
  };

  const nextPage = () => {
    setcurrentPage(info.next)
  };


  return (
    <div>
      <Chacaters charactersList={charactersList} />
      <div className="botoes">
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default App;
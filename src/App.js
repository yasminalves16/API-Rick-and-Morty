import { useEffect, useState } from "react";
import "./App.css";
import Chacaters from "./Components/Characters";

function App() {
  const [charactersList, setCharactersList] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );

      const jsonResponse = await response.json();
      setCharactersList(jsonResponse.results);
    };

    fetchResponse();
  }, [currentPage]);

  const previousPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage <= 42) {
      setcurrentPage(currentPage + 1);
    }
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

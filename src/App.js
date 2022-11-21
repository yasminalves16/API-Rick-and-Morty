import { useEffect, useState } from "react";
import "./App.css";
import Chacaters from "./Components/Characters";
import Header from "./Components/Header";
import fotoLogo from "./Components/images/logo.jpeg";
import fotoPortal from "./Components/images/pngegg.png"

function App() {
  const [charactersList, setCharactersList] = useState([]);

  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const [input, setInput] = useState("");

  const [currentPage, setcurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  const [info, setInfo] = useState("");

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch(currentPage);

      const jsonResponse = await response.json();

      setCharactersList(jsonResponse.results);
      setFilteredCharacters(jsonResponse.results);
      setInfo(jsonResponse.info);
    };

    fetchResponse();
  }, [currentPage]);

  const previousPage = () => {
    if (info.prev !== null) {
      setcurrentPage(info.prev);
    }
  };

  const nextPage = () => {
    setcurrentPage(info.next);
  };

  const showCharacters = () => {
    const filtraPesquisa = charactersList.filter((item) => {
      return item.name.toUpperCase().includes(input.toUpperCase());
    });
    setFilteredCharacters(filtraPesquisa);
  };

  return (
    <>
      <Header
        fotoLogo={fotoLogo}
        setInput={setInput}
        showCharacters={showCharacters}
      />
      <main>
        {filteredCharacters.length >= 1 ? (
          <div>
            <Chacaters charactersList={filteredCharacters} />
            <div className="botoes">
              <button onClick={previousPage}>Previous</button>
              <button onClick={nextPage}>Next</button>
            </div>
          </div>
        ) : (
          <div className="off">
            <h2>Não há ninguém para sair do portal com esse nome</h2>
            <img src={fotoPortal} alt="Logo Rick and Morty" />
            <button onClick={nextPage}>Voltar</button>
          </div>
        )}
      </main>
      <footer></footer>
    </>
  );
}

export default App;

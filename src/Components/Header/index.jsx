import './style.css'

const Header = ({ fotoLogo, setInput, showCharacters }) => {
  return (
    <header>
      <img src={fotoLogo} alt="Logo Rick and Morty" />
      <form>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="button" onClick={() => showCharacters()}>
          Pesquisar
        </button>
      </form>
    </header>
  );
};  

export default Header;

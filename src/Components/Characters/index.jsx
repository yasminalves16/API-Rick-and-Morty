import CharCard from "../CharCard";
import './style.css'

const Chacaters = ({ charactersList }) => {
  return (
    <div className="principal">
      <h1>Meus personagens</h1>
      <div className='container'>
        {charactersList.map((character) => (
          <CharCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Chacaters;
import './style.css'

const CharCard = ({ character }) => {
 
  return (
    <div className={character.status === 'Alive'? 'green': 'red'}>
    <p>{character.name}</p>
    <img src={character.image} alt={character.name}></img>
    </div>
  );
};

export default CharCard;
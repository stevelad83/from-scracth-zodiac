import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="zodiacCard">
      <img src={`images/${props.name}.png`} />
      <h2>{props.name}</h2>
      <h3>{props.dates}</h3>
    </div>
  );
}

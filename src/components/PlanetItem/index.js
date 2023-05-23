import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <li>
      <div className="planet-container" data-testid="planets">
        <h1 className="head">PLANETS</h1>
        <img src={imageUrl} alt={name} className="img" />
        <h1 className="heading">{name}</h1>
        <p className="describe">{description}</p>
      </div>
    </li>
  )
}

export default PlanetItem

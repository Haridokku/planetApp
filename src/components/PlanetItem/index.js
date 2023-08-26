
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planet-container" data-testid="planets">
      <img src={imageUrl} alt={`planet${name}`} className="img" />
      <h1 className="heading">{name}</h1>
      <p className="describe">{description}</p>
    </div>
  )
}

export default PlanetItem

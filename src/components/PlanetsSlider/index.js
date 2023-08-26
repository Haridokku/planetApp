import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="slider-container">
      <div data-testid="planets">
        <h1 className="head">PLANETS</h1>
        <Slider>
          {planetsList.map(each => (
            <PlanetItem key={each.id} planetDetails={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider

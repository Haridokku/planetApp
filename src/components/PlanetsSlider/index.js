
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <div data-testid="planets">
        <h1 className="head">PLANETS</h1>
        <Slider {...settings}>
          <ul className="list-container">
            {planetsList.map(each => (
              <PlanetItem key={each.id} planetDetails={each} />
            ))}
          </ul>
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider

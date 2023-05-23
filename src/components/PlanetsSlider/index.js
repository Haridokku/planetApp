import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div data-testid="planets">
          <ul className="list-container">
            {planetsList.map(each => (
              <PlanetItem key={each.id} planetDetails={each} />
            ))}
          </ul>
        </div>
      </Slider>
    </div>
  )
}

export default PlanetsSlider

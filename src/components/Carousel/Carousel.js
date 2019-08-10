import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { observer } from 'mobx-react'

/**
 *
 * @param {{sliderWidth: number, itemWidth: number, ...props}} props - containing attribute
 * and payload from screen
 * @param props.sliderWidth - width of slider
 * @param props.itemWidth - width of an item
 * @returns {Object} CarouselComponent
 */
const CarouselComponent = ({ sliderWidth, itemWidth, ...props }) => (
  <Carousel
    ref={props.setCarouselRef}
    data={props.entries}
    renderItem={props.renderItem}
    sliderWidth={sliderWidth || '100%'}
    itemWidth={itemWidth || '100%'}
    onSnapToItem={props.onSnapToItem}
    scrollEnabled={false}
  />
)

/**
 * @returns {Object} CarouselComponent
 */
export default observer(CarouselComponent)

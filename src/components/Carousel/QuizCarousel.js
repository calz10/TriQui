import React from 'react'
import { View } from 'native-base'
import { observer } from 'mobx-react'
import { Dimensions } from 'react-native'
import Carousel from './Carousel'
import QuizItem from './QuizItem'

/**
 * @type {number} width - constant dimension width of mobile
 */
const { width } = Dimensions.get('screen')

/**
 *
 * @param {{item: Object, index: number}} params - contains the props item of
 * the component passed by Parent Component
 * @param {Object} params.item - content of component to be rendered
 * @param {number} params.index - current index of component to be render
 * @returns {Object} component
 */
const renderItem = ({ item, index }) => (
  <View
    style={{
      height: '100%',
      padding: '5%',
      justifyContent: 'space-between'
    }}
  >
    <QuizItem {...item} index={index + 1} />
  </View>
)

const formatData = (props) => {
  const newEntries = props.entries.map(item => ({
    ...item,
    handleAction: props.handleAnswer,
    show: props.show
  }))
  return newEntries
}

/**
 *
 * @param {Object} props - passed props from parent component
 * @returns {Object} QuizCarousel Component with customed data
 */
const QuizCarousel = props => (
  <View>
    <Carousel
      entries={formatData(props)}
      renderItem={renderItem}
      setCarouselRef={props.setCarouselRef}
      itemWidth={width}
      onSnapToItem={props.onSnapItem}
      sliderWidth={width}
      scrollEnabled={props.scrollEnabled}
    />
  </View>
)

/**
 * @returns {Object} pure QuizCarousel Component
 */
export default observer(QuizCarousel)

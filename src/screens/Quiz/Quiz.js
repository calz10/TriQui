/* eslint-disable react/sort-comp */
import React, { Component } from 'react'
// eslint-disable-next-line object-curly-newline
import { Container, Content, View, Text } from 'native-base'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { QuizCarousel } from '../../components/Carousel'
import { resetStackAction } from '../../config/util'
import styles from './styles'

@inject('quizStore')
@observer
/**
 * Quiz - Questions screens
 */
class Quiz extends Component {
  /**
   * @type {Object} carouseRef - ref constant for carousel
   */
  @observable carouseRef = {}

  @observable data = {}

  @observable show = false

  /**
   * @type {number} currentSlideIndex  - determines where the current slide at what index
   */
  @observable currentSlideIndex = 0

  /**
   * @type {Object} props- props that passed from super class
   */
  constructor(props) {
    super(props)
    /**
     * @type {function} setCarouselRef - binding of function into class
     * to inherit its parent property
     */
    this.setCarouselRef = this.setCarouselRef.bind(this)

    /**
     * @type {function} onSnap - binding of function into class to inherit its parent property
     */
    this.onSnap = this.onSnap.bind(this)

    this.handleAnswer = this.handleAnswer.bind(this)
  }

  /**
   * function that will set the ref of caarousel to be use inside the class
   * @param {Object} ref - setting the ref of component that being rendered
   */
  setCarouselRef(ref) {
    this.carouseRef = ref
  }

  /**
   * Function triggers when listener of carousel on snap emits
   * @param {number} index - callback returned value during snaping
   * @type {function}
   */
  onSnap(index) {
    this.currentSlideIndex = index
  }

  /**
   *
   * @param {string} answer - selected string answer
   * @param {number} index - index of being rendered component from carousel
   */
  handleAnswer(answer, index) {
    this.props.quizStore.handleAnswer(answer, index, (navigateToResult) => {
      if (navigateToResult) {
        const stackAction = resetStackAction('Result')
        this.props.navigation.dispatch(stackAction)
      } else {
        this.show = true
        setTimeout(() => {
          this.show = false
          this.carouseRef.snapToNext()
        }, 1500)
      }
    })
  }

  /**
   * Function that renders the screen and returns the Component
   */
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.quizContent}>
          <View
            style={styles.quizContentView}
          >
            <QuizCarousel
              setCarouselRef={this.setCarouselRef}
              entries={this.props.quizStore.questions}
              onSnapItem={this.onSnap}
              handleAnswer={this.handleAnswer}
              show={this.show}
              activeSlide={this.currentSlideIndex}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>{`${this.currentSlideIndex + 1}/10 of items`}</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

/**
 * @returns Quiz Component
 */
export default Quiz

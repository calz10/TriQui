import React from 'react'
// eslint-disable-next-line object-curly-newline
import { View, H1, H3 } from 'native-base'
import Buttons from '../Buttons/LinearButton'

/**
 * Styles for QuizResult customed component
 * contains all styles applied for the component
 * @type {Object}
 */
const styles = {
  outerView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  innerView: {
    flex: 0.2,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  questionView: {
    height: '55%',
    justifyContent: 'center'
  },
  centerText: {
    padding: '2%',
    textAlign: 'center',
    fontSize: 30
  },
  answerView: {
    width: '95%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  colorize: {
    color: '#6ac8c7'
  }
}

/**
 * @type {Object|Component}
 * @param {Object} props -params passed from parent class
 */
const QuizResult = props => (
  <View style={styles.outerView}>
    <View style={styles.innerView}>
      <View>
        <H1 style={styles.centerText}>Here Is Your Score!</H1>
      </View>
      <View style={styles.questionView}>
        <H3 style={[styles.centerText, styles.colorize]}>{`${props.score}/10`}</H3>
      </View>
      <View style={styles.questionView}>
        <H3 style={styles.centerText}>{`time: ${props.time} minutes`}</H3>
      </View>
    </View>
    <View style={styles.answerView}>
      <Buttons handleAction={props.handlePlayAgain} buttonText="Play Again" />
    </View>
  </View>
)

/**
 * @returns QuizResult component
 */
export default QuizResult

import React from 'react'
// eslint-disable-next-line object-curly-newline
import { View, H1, H3, Text } from 'native-base'
import Buttons from '../Buttons/LinearButton'

/**
 * Contains styles for item component
 * @type {Object} styles
 *
 */
const styles = {
  outerView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  innerView: {
    flex: 2,
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
    fontSize: 25
  },
  difficultyView: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  answerView: {
    width: '90%',
    alignItems: 'center'
  }
}

/**
 *
 * @param {Object} props - props passed from parent component
 */
const MultipleChoice = props => (
  <View style={styles.outerView}>
    <View style={styles.innerView}>
      <View>
        <H1 style={styles.centerText}>{props.category}</H1>
      </View>
      <View style={styles.questionView}>
        <H3 style={styles.centerText}>{`${props.question}`}</H3>
        <View style={styles.difficultyView}>
          <Text>difficulty: </Text>
          <Text>{props.difficulty}</Text>
        </View>
        {props.show && (
          <View style={styles.difficultyView}>
            <Text>answer: </Text>
            <Text>{props.correctAnswer}</Text>
          </View>
        )}
      </View>
    </View>
    <View style={styles.answerView}>
      {props.answers.map((item, i) => (
        <Buttons
          handleAction={() => props.handleAction(item, props.index)}
          buttonText={item}
          // eslint-disable-next-line react/no-array-index-key
          key={item + i}
        />
      ))}
    </View>
  </View>
)

export default MultipleChoice

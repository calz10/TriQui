/* eslint-disable react/sort-comp */
import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { observer, inject } from 'mobx-react'
import { QuizResult } from '../../components/Quiz'
import { resetStackAction } from '../../config/util'
import styles from './styles'

@inject('quizStore')
@observer
/**
 * Recover Wallet - being use in recovering existing wallet and use the available assets that is
 * still available in the wallet and retrieve past transactions etc;
 */
class Quiz extends Component {
  /**
   * @type {Object} props- props that passed from super class
   */
  constructor(props) {
    super(props)
    this.handlePlayAgain = this.handlePlayAgain.bind(this)
  }

  handlePlayAgain() {
    this.props.quizStore.clearQuiz(() => {
      const stackAction = resetStackAction('DashBoardScreen')
      this.props.navigation.dispatch(stackAction)
    })
  }

  /**
   * Function that renders the screen and returns the Component
   */
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.resultContent}>
          <QuizResult
            score={this.props.quizStore.score}
            handlePlayAgain={this.handlePlayAgain}
            time={this.props.quizStore.timeDetails.time}
          />
        </Content>
      </Container>
    )
  }
}

/**
 * @returns RecoverWallet Component
 */
export default Quiz

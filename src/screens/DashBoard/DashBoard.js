import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// eslint-disable-next-line object-curly-newline
import { Container, View, H2, H1 } from 'native-base'
import { observable } from 'mobx'
import { LinearButton } from '../../components/Buttons'
import styles from './styles'
import { AppModal } from '../../components/Modal'

@inject('quizStore')
@observer
/**
 * DashBoard -componet
 * Initial Screen for the app to land
 */
class DashBoard extends Component {
  /**
   * @type {boolean} Observable property  visibleModal of class
   */
  @observable visibleModal = false

  /**
   * Default constructor of class
   * @param {Object} props - props passed from super class
   */
  constructor(props) {
    super(props)
    /**
     * @type {function} handleGenerateQuiz - binding of function into class
     * to inherit its parent property
     */
    this.handleGenerateQuiz = this.handleGenerateQuiz.bind(this)

    /**
     * @type {function} hideModal - binding of function into class
     * to inherit its parent property
     */
    this.hideModal = this.hideModal.bind(this)
  }

  /**
   * Function that handles generate quiz by fetching from store
   * @type {function}
   */
  handleGenerateQuiz() {
    this.visibleModal = true
    this.props.quizStore.generateQuiz(() => {
      this.visibleModal = false
      this.props.navigation.navigate('Quiz')
    })
  }

  /**
   * Function that hideModal modal
   * @type {function}
   */
  hideModal() {
    this.visibleModal = !this.visibleModal
  }

  /**
   * default render function of react component
   */
  render() {
    return (
      <Container style={styles.container}>
        <AppModal
          visibleModal={this.visibleModal}
          clearModal={this.hideModal}
          modalMessage="Fetching trivia"
        />
        <View style={{ padding: '20%' }}>
          <H2>Welcome to</H2>
          <H1>TriQui App</H1>
        </View>
        <LinearButton
          handleAction={this.handleGenerateQuiz}
          buttonText="Start Quiz!"
        />
      </Container>
    )
  }
}

export default DashBoard

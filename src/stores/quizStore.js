/* eslint-disable camelcase */
import { observable, action } from 'mobx'
import { Toast } from 'native-base'
import moment from 'moment'
import { QuizApi } from '../api'
import { shuffle } from '../config/util'

/**
 * QuizStore - store for Quiz Items
 */
class QuizStore {
  @observable questions = []

  @observable correctAnswers = {}

  @observable timeDetails = {}

  @observable userAnswers = {}

  @observable score = 0

  /**
   * Class Constructor
   * @param {function} root - assigning variable rootStore value from rootStore
   */
  constructor(root) {
    /**
     * Assigning value of variable rootstore from params of constructor
     */
    this.rootStore = root
  }

  @action clearQuiz(callback) {
    this.correctAnswers = {}
    this.userAnswers = {}
    this.score = 0
    this.questions = []
    this.timeDetails = {}
    callback()
  }

  /**
   *
   * @param {string} item - answer from given items
   * @param {number} answerIndex - index of question
   * @param {function} callback - callback function that triggers when being called
   */
  @action async handleAnswer(item, answerIndex, callback) {
    this.userAnswers = { ...this.userAnswers, [answerIndex]: item }
    if (answerIndex === 10) {
      const end = await QuizApi.getCurrentTime()

      const { start } = this.timeDetails
      /** records start and end time of playing */
      const startMoment = moment.unix(start)
      const endMoment = moment.unix(end)
      const time = moment(endMoment.diff(startMoment)).format('mm:ss')
      /** stores details for possible usage in other components */
      this.timeDetails = { ...this.timeDetails, end, time }
      const answers = Object.values(this.userAnswers)

      const correctAnswers = answers.filter(
        (answer, index) => answer === this.correctAnswers[index + 1]
      )
      this.score = correctAnswers.length
      callback(true)
    } else {
      callback(false)
    }
  }

  /**
   * A store function that gets quizes from the api given
   * and sets @property observable questions values
   * @type {function}
   */
  @action async generateQuiz(callback) {
    /* get current time and set as start time */
    const start = await QuizApi.getCurrentTime()
    this.timeDetails = { start }
    try {
      /** fetch quizes from api */
      const generatedQuizes = await QuizApi.generateQuiz()
      if (generatedQuizes.length) {
        /** format array required structure of carousel */
        const formatQuizes = generatedQuizes.map(
          ({ correct_answer, incorrect_answers, ...item }, index) => {
            this.correctAnswers = {
              ...this.correctAnswers,
              [index + 1]: correct_answer
            }
            const answers = shuffle([correct_answer, ...incorrect_answers])
            return { ...item, answers, correctAnswer: correct_answer }
          }
        )
        this.questions = formatQuizes
        callback()
      }
    } catch (error) {
      Toast.show({ text: error.message, type: 'danger', position: 'top' })
    }
  }
}

/**
 * @returns {function} QuizStore
 */
export default QuizStore

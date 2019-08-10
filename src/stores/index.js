import QuizStore from './quizStore'

/**
 * Rootstore- store that holds all the store
 */
class RootStore {
  constructor() {
    /**
     * Assigning value for property quizStore of class
     */
    this.quizStore = new QuizStore(this)
  }
}

/**
 * @returns {function|class} Rootstore
 */
export default RootStore

import axios from 'axios'

/**
 * QuizApi - api for fetching quiz details and list of
 * trivias
 * @type {class}
 */
class QuizApi {
  /**
   * Fetching trivia from given api
   * @type {function}
   * @returns {Object}
   */
  async generateQuiz() {
    try {
      const { data } = await axios.get('https://opentdb.com/api.php?amount=10')
      if (data) {
        const { results } = data
        return results
      }
      return []
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Get time from server
   * @type {function}
   * @returns {number} unixtime
   */
  async getCurrentTime() {
    try {
      const { data } = await axios.get(
        'http://worldtimeapi.org/api/timezone/Asia/Macau'
      )
      if (data) {
        const { unixtime } = data
        return unixtime
      }
      return new Date().getTime()
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

/**
 * exports class QuizApi
 */
export default new QuizApi()

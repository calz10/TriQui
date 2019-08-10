import React, { Component } from 'react'
import { createRootNavigator } from './config'

/**
 * Class App
 * Class that where stores can be instantiated and determins routes
 * @type {Class}
 */
class App extends Component {
  /**
   * default render function of react
   * @returns {Component}
   */
  render() {
    const Layout = createRootNavigator()
    return (
      <>
        <Layout />
      </>
    )
  }
}

/**
 * exports App
 * @type {Object}
 */
export default App

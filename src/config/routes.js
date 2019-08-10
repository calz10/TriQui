/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { DashBoard } from '../screens/DashBoard'
import { Quiz, Result } from '../screens/Quiz'

const createRootNavigator = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  createAppContainer(
    createStackNavigator(
      {
        DashBoardScreen: {
          screen: DashBoard,
          navigationOptions: {
            header: null
          }
        },
        Quiz: {
          screen: Quiz,
          navigationOptions: {
            title: 'Quiz'
          }
        },
        Result: {
          screen: Result,
          navigationOptions: {
            header: null
          }
        }
      },
      {
        initialRouteName: 'DashBoardScreen'
      }
    )
  )

export default createRootNavigator

import React from 'react'
import { TouchableHighlight } from 'react-native'
import { Text } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

/**
 *
 * LinearButton Component
 * @param {Object} props - props rendered and passed from parent component
 */
const LinearButton = (props) => {
  const { handleAction, buttonText } = props
  return (
    <TouchableHighlight
      underlayColor="transparent"
      onPress={handleAction}
      style={styles.touchableView}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1.1, y: 0 }}
        style={styles.linearButton}
        colors={['#6ac8c7', '#addbc9']}
      >
        <Text style={styles.textStyle}>{buttonText}</Text>
      </LinearGradient>
    </TouchableHighlight>
  )
}

/**
 * @return {Component} LinearButton
 */
export default LinearButton

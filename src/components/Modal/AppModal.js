import React from 'react'
import { BallIndicator } from 'react-native-indicators'
import { View, Text } from 'native-base'
import Modal from './Modal'

/**
 *
 * @param {Object} props - modal for showing status of progress in app
 */
const AppModal = props => (
  <Modal
    handleHideModal={props.clearModal}
    visibility={props.visibleModal}
    height="40%"
  >
    <View
      style={{
        height: '100%',
        backgroundColor: '#6ac8c7',
        borderRadius: 30,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View style={{ height: '50%' }}>
        <BallIndicator color="white" size={40} style={{ height: '50%' }} />
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontFamily: 'Roboto-Bold'
        }}
      >
        {props.modalMessage}
      </Text>
    </View>
  </Modal>
)

/**
 * @returns {Component} AppModal
 */
export default AppModal

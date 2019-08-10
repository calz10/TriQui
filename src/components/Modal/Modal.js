import React from 'react'
// eslint-disable-next-line object-curly-newline
import { View, Grid, Container, Row } from 'native-base'
import {
  KeyboardAvoidingView,
  Modal as ModalNative,
  TouchableWithoutFeedback
} from 'react-native'
import { observer } from 'mobx-react'
import styles from './styles'

/**
 * Modal for showing screen overlay.
 *
 * Use Content component for the modal content to make use of vertical scroll.
 *
 * @param {boolean} props.visibility - Shows the modal if true and hides when false.
 * @param {number!} props.height - Height of the modal. Must be specified separately
 *                                 from the style.
 * @param {Object} props.style - Style for the modal.
 */
const Modal = props => (
  <ModalNative
    visible={props.visibility}
    animationType="slide"
    transparent
    onRequestClose={() => {}}
  >
    <TouchableWithoutFeedback
      onPress={() => props.handleHideModal()}
      style={styles.outerContainerWrapper}
    >
      <Container style={styles.container}>
        <Grid>
          <Row style={styles.contentRow}>
            <KeyboardAvoidingView
              behavior="padding"
              enabled={
                props.isKeyboardAvoidingViewDisabled === undefined
                || !props.isKeyboardAvoidingViewDisabled
              }
              style={[styles.keyboardAvoidingView, { height: props.height }]}
            >
              <View
                onStartShouldSetResponder={() => true}
                style={[styles.content, props.style]}
                containerBg
              >
                {props.children}
              </View>
            </KeyboardAvoidingView>
          </Row>
        </Grid>
      </Container>
    </TouchableWithoutFeedback>
  </ModalNative>
)

/**
 * @returns {Component} returns componet Modal
 */
export default observer(Modal)

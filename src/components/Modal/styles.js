import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('screen')

/**
 * Styles for Modal customed component
 * contains all styles applied for the component
 * @type {Object}
 */
const styles = StyleSheet.create({
  outerContainerWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  container: {
    backgroundColor: 'transparent'
  },
  keyboardAvoidingView: {
    width: '100%'
  },
  content: {
    height: '100%'
  },
  contentRow: {
    alignItems: 'center'
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  textCenter: {
    textAlign: 'center'
  }
})

/**
 * @exports component
 * @type {Object}
 */
export default styles

import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  touchableView: {
    width: '100%',
    margin: 8
  },
  linearButton: {
    width: '100%',
    borderRadius: (height * 0.06) / 2,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center'
  }
})

export default styles

import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 10
  },
  animatedContainer: {
    flex: 1,
    alignSelf: 'stretch',
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 15
  }
})

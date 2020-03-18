import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000'
  },
  backdropWithImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  animatedContainer: {
    flex: 1,
    alignSelf: 'stretch',
    position: 'absolute',
    left: 0,
    right: 0
  }
})
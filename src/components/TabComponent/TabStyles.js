import {StyleSheet} from 'react-native';
import {COLORS, TEXT_STYLE} from '../../constants/StylesConstants';

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
    bottom: 0,
    left: 0,
    backgroundColor: COLORS.BOTTOM_BACKGROUND_COLOUR,
    paddingTop: 10,
  },
  button: {
    width: '32%',
    height: TEXT_STYLE.BUTTON_CONTAINER_HEIGHT,
    backgroundColor: COLORS.BUTTON_BACKGROUND_COLOUR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: TEXT_STYLE.FONT_SIZE_16,
    color: COLORS.TEXT_COLOUR,
  },
});

export default styles;

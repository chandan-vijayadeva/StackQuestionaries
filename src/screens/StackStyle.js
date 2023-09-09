import {StyleSheet} from 'react-native';
import {COLORS, TEXT_STYLE} from '../constants/StylesConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: COLORS.ITEM_BACKGROUND_COLOUR,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderColor: COLORS.BORDER_COLOUR,
    borderWidth: 0.2,
  },
  title: {
    fontSize: TEXT_STYLE.FONT_SIZE_20,
  },
  text: {
    margin: 16,
    color: COLORS.TEXT_COLOUR,
  },
  headerText: {
    textAlign: 'center',
     fontSize: 20
    },
});

export default styles;

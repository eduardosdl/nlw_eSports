import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 4,
  },
  value: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
});



import { StyleSheet } from 'react-native';
import { px, deviceWidth, deviceHeight } from '../../utils/dimensions';
// import { FONTS } from '../../assets/constant/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  backgroundImage: {
    width: deviceWidth,
    height: deviceHeight,
    borderRadius: px(8),
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: px(10),
  },
  header: {
    alignItems: 'center',
    marginTop: px(15),
    marginBottom: px(20),
  },
  title: {
    fontSize: px(30),
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    lineHeight: px(31),

  },
  subtitle: {
    fontSize: px(16),
    color: '#555',
    textAlign: 'center',
    marginTop: px(10),
    lineHeight: px(26),
    //  fontFamily:FONTS.REGULAR,
  },
  imageWrapper: {
    borderRadius: px(15),
    overflow: 'hidden',
    // backgroundColor: '#fff',


  },
  posterImage: {
    marginTop: px(20),
    width: px(410),
    height: px(420),
    borderRadius: px(15),
    marginLeft: px(20),
    marginRight: px(20),

  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth * 1,
    marginTop: px(15),
  },
  downloadBtn: {
    flex: 1,
    backgroundColor: '#FF984F',
    borderRadius: px(10),
    paddingVertical: px(12),
    paddingHorizontal: px(20),
    marginRight: px(10),
    marginLeft: px(10),
    alignItems: 'center',
  },
  downloadText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: px(18),
  },
  nextBtn: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: px(10),
    paddingVertical: px(12),
    paddingHorizontal: px(20),
    borderWidth: 1,
    marginRight: px(10),
    marginLeft: px(10),
    alignItems: 'center',
    borderColor: '#ddd',
  },
  nextText: {
    color: '#252525',
    fontWeight: '600',
    fontSize: px(18),
  },
});

export default styles;

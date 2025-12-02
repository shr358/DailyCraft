

import { StyleSheet } from 'react-native';
import { deviceHeight as dh, deviceWidth as dw, px } from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
  },

  headerBackground: {
    width: '100%',
    height: dh * 0.32,
      // marginTop:px(5),
    // marginBottom:px(20),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dw * 0.06,
    paddingTop: dh * 0.04,
  },

  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: dw * 0.1,
    width: dw * 0.1,
    borderRadius: dw * 0.03,
    backgroundColor: '#FF8C32',
    borderWidth: px(2),
    borderColor: '#FFFFFF',
  },

  banner: {
    paddingHorizontal: dw * 0.06,
    marginTop: dh * 0.01,
  },

  title: {
    color: '#fff',
    fontSize: px(22), // width * 0.06 converted approx
    fontWeight: '600',
    lineHeight: px(26),
    marginTop: dh * 0.01,
  },

  subtitle: {
    fontSize: px(15),  // width * 0.039
    color: '#fff',
    marginTop: dh * 0.02,
    lineHeight: px(20),
  },

  grid: {
    marginTop: dh * 0.05,
    paddingHorizontal: dw * 0.06,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: dh * 0.02,
  },

  langCard: {
    width: dw * 0.42,
    height: dh * 0.1,
    backgroundColor: '#FFFFFF',
    borderRadius: dw * 0.03,
    borderWidth: px(1.5),
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  selectedCard: {
    borderColor: '#FF8C32',
  },

  langText: {
    fontSize: px(18), // width * 0.045
    fontWeight: '600',
    color: '#1E293B',
  },

  tickIcon: {
    position: 'absolute',
    top: dw * 0.02,
    right: dw * 0.02,
  },

  bottomContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#FFF0ED',
    paddingHorizontal: dw * 0.06,
    paddingTop: dw * 0.04,
    paddingBottom: dw * 0.05,
    borderTopWidth: px(1),
    borderTopColor: '#eee',
    bottom: dh * 0.07,
  },
});

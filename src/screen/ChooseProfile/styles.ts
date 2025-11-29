

import { StyleSheet } from 'react-native';
import { px, deviceWidth, deviceHeight } from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
  },

  headerBackground: {
    width: '100%',
    height: deviceHeight * 0.32,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: deviceWidth * 0.06,
    paddingTop: deviceHeight * 0.05,
  },

  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceWidth * 0.1,
    width: deviceWidth * 0.1,
    borderRadius: deviceWidth * 0.03,
    backgroundColor: '#FF8C32',
    borderWidth: px(2),
    borderColor: '#FFFFFF',
  },

  banner: {
    paddingHorizontal: deviceWidth * 0.06,
    marginTop: deviceHeight * 0.01,
  },

  title: {
    color: '#fff',
    fontSize: deviceWidth * 0.080,
    fontWeight: '500',
    lineHeight: deviceWidth * 0.08,
    marginTop: deviceHeight * 0.01,
  },

  subtitle: {
    fontSize: deviceWidth * 0.037,
    color: '#fff',
    marginTop: deviceHeight * 0.02,
    lineHeight: deviceWidth * 0.05,
  },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: deviceHeight * 0.06,
    paddingHorizontal: deviceWidth * 0.05,
  },

  card: {
    width: deviceWidth * 0.4,
    height: deviceHeight * 0.28,
    backgroundColor: '#FFFFFF',
    borderRadius: deviceWidth * 0.03,
    borderWidth: px(1.5),
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: deviceWidth * 0.03,
    borderStyle: 'dashed',
  },

  selectedCard: {
    borderColor: '#FF8C32',
  },

  circle: {
    width: deviceWidth * 0.22,
    height: deviceWidth * 0.22,
    borderRadius: deviceWidth * 0.11,
    backgroundColor: '#E2E8F0',
    marginBottom: deviceHeight * 0.018,
  },

  cardTitle: {
    fontSize: deviceWidth * 0.045,
    fontWeight: '600',
    color: '#1E293B',
  },

  cardDesc: {
    fontSize: deviceWidth * 0.032,
    color: '#64748B',
    textAlign: 'center',
    marginTop: deviceHeight * 0.01,
  },

  tickIcon: {
    position: 'absolute',
    top: deviceWidth * 0.03,
    right: deviceWidth * 0.03,
  },

  bottomContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#FFF0ED',
    paddingHorizontal: deviceWidth * 0.06,
    paddingTop: deviceWidth * 0.04,
    paddingBottom: deviceWidth * 0.017,
    borderTopWidth: px(1),
    borderTopColor: '#eee',
    bottom: deviceHeight * 0.09,
  },
});


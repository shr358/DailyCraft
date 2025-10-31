import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
  },

  headerBackground: {
    width: '100%',
    height: height * 0.32,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.06,
  },

  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: width * 0.1,
    width: width * 0.1,
    borderRadius: width * 0.03,
    backgroundColor: '#FF8C32',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  banner: {
    paddingHorizontal: width * 0.06,
    marginTop: height * 0.01,
  },

  title: {
    color: '#fff',
    fontSize: width * 0.060,
    fontWeight: '600',
     lineHeight: width * 0.07,
      marginTop: height * 0.01,
  },

  subtitle: {
    fontSize: width * 0.033,
    color: '#fff',
    marginTop: height * 0.02,
    lineHeight: width * 0.05,

  },

  grid: {
    marginTop: height * 0.05,
    paddingHorizontal: width * 0.06,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },

  langCard: {
    width: width * 0.42,
    height: height * 0.1,
    backgroundColor: '#FFFFFF',
    borderRadius: width * 0.03,
    borderWidth: 1.5,
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
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#1E293B',
  },

  tickIcon: {
    position: 'absolute',
    top: width * 0.02,
    right: width * 0.02,
  },

  bottomContainer: {
    position: 'absolute',
    // bottom: 0,
    width: '100%',
    backgroundColor: '#FFF0ED',
    paddingHorizontal: width * 0.06,
    paddingTop: width * 0.04,
    paddingBottom: width * 0.05,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    bottom: height * 0.07,
  },
});

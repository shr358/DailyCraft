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
    fontSize: width * 0.080,
    fontWeight: '500',
     lineHeight: width * 0.08,
      marginTop: height * 0.01,
      // justifyContent:'center',
  },

  subtitle: {
    fontSize: width * 0.037,
    color: '#fff',
    marginTop: height * 0.02,
    lineHeight: width * 0.05,
  },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.06,
    paddingHorizontal: width * 0.05,
  },

  card: {
    width: width * 0.4,
    height: height * 0.28,
    backgroundColor: '#FFFFFF',
    borderRadius: width * 0.03,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: width * 0.03,
     borderStyle: 'dashed',
  },

  selectedCard: {
    borderColor: '#FF8C32',
  },

  circle: {
  width: width * 0.22,
  height: width * 0.22,
  borderRadius: width * 0.11,
  backgroundColor: '#E2E8F0',
  marginBottom: height * 0.018,
},


  cardTitle: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#1E293B',
  },

  cardDesc: {
    fontSize: width * 0.032,
    color: '#64748B',
    textAlign: 'center',
    marginTop: height * 0.01,
  },

  tickIcon: {
    position: 'absolute',
    top: width * 0.03,
    right: width * 0.03,
  },
  bottomContainer: {
    position: 'absolute',
    // bottom: 0,
    width: '100%',
    backgroundColor: '#FFF0ED',
    paddingHorizontal: width * 0.06,
    paddingTop: width * 0.04,
    paddingBottom: width * 0.017,
    borderTopWidth: 1,
    borderTopColor: '#eee',
     bottom: height * 0.09,
  },

});


import {StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

 export default StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    padding: width * 0.06,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#252525',
    textAlign: 'center',
    marginTop: width * 0.1,
  lineHeight:width * 0.08,
   marginBottom: width * 0.05,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginVertical: width * 0.04,
      lineHeight:width * 0.05,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: width * 0.04,
    padding: 4,
    marginBottom: width * 0.05,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: width * 0.025,
    alignItems: 'center',
    borderRadius: width * 0.03,
  },
  toggleText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeBtn: {
    backgroundColor: '#FF984F',
  },
  activeText: {
    color: '#fff',
  },
  card: {
    width: '90%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: width * 0.04,
    alignItems: 'center',
    paddingVertical: width * 0.06,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: width * 0.02,
  },
  planPrice: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FF984F',
  },
  planUnit: {
    fontSize: 16,
    color: '#FF984F',
  },
  planSub: {
    color: '#666',
    fontSize: 13,
    marginBottom: width * 0.04,
  },
  features: {
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
    marginBottom: width * 0.04,
  },
  feature: {
    fontSize: 13,
    color: '#333',
    marginVertical: 3,
  },
  continueBtn: {
    backgroundColor: '#FF984F',
    width: '85%',
    alignItems: 'center',
    paddingVertical: width * 0.035,
    borderRadius: width * 0.03,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

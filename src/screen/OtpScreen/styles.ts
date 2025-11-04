

import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F9F9F9',
      backgroundColor: '#FFF0ED',
  },

  headerBackground: {
    width: '100%',
    height: height * 0.32,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.07,
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
    marginTop: height * 0.02,
  },

  title: {
    fontSize: width * 0.065,
    fontWeight: '700',
    color: '#fff',
  },

  subtitle: {
    fontSize: width * 0.039,
    color: '#fff',
    marginTop: height * 0.01,
    lineHeight: width * 0.05,
  },


  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: width * 0.15,
    marginTop: height * 0.05,
  },

  otpBox: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: width * 0.02,
    borderWidth: 1.2,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: width * 0.05,
    color: '#1E293B',
    fontWeight: '600',
  },

  resendText: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: width * 0.035,
    marginTop: height * 0.02,
  },

  resendLink: {
    color: '#FF8C32',
    fontWeight: '600',
  },

  verifyButton: {
   position: 'absolute',
  bottom: height * 0.09,
  alignSelf: 'center',
  width: width * 0.9,

  backgroundColor: '#FF8C32',
  // paddingVertical: height * 0.02,
  paddingVertical: width * 0.035,
  borderRadius: width * 0.02,

  },

  verifyButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: width * 0.045,
    fontWeight: '600',
  },

  errorText: {
  color: 'red',
  fontSize: width * 0.033,
  marginTop: width * 0.03,
  fontWeight: '500',

  alignSelf:'center',
},
});

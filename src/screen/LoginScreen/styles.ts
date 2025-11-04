


import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:height * 0.01,
    backgroundColor: '#FFF0ED',
  },

  headerBackground: {
    width: width,
    height: height * 0.32,
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.07,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: width * 0.1,
    width: width * 0.1,
    borderRadius: width * 0.03,
    backgroundColor: '#FF8C32',
    borderColor: '#FFFFFF',
     borderWidth: 2,

  },

  backArrow: {
    fontSize: width * 0.07,
    color: '#FFFFFF',
 textAlign: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
  },

  skip: {
    color: '#FFFFFF',
    fontSize: width * 0.04,
    fontWeight: '500',
    marginTop:height * 0.015,
      marginBottom: width * 0.04,
  },

  banner: {
    marginTop: height * 0.015,
  },

  title: {
    color: '#fff',
    fontSize: width * 0.065,
    fontWeight: '700',
     lineHeight: width * 0.07,
      marginTop: height * 0.01,
  },

  subtitle: {
    color: '#fff',
    fontSize: width * 0.035,
    marginTop: width * 0.02,
    width: '90%',
    lineHeight: width * 0.05,
  },

  inputSection: {
    paddingHorizontal: width * 0.06,
    marginTop: width * 0.08,
  },

  label: {
    color: '#565656',
    fontWeight: '600',
    marginBottom: width * 0.02,
    fontSize: width * 0.035,
  },

  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    backgroundColor: '#fff',
  },

  flagIcon: {
    width: width * 0.07,
    height: width * 0.05,
    marginRight: width * 0.02,
  },

  countryCode: {
    fontWeight: '600',
    fontSize: width * 0.04,
    marginRight: width * 0.02,
  },

  input: {
    flex: 1,
    paddingVertical: width * 0.03,
    fontSize: width * 0.045,
  },

  callIcon: {
    width: width * 0.05,
    height: width * 0.05,
    tintColor: '#FF8C32',
  },

  helperText: {
    marginTop: width * 0.02,
    color: '#565656',
    fontSize: width * 0.03,
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF0ED',
    paddingHorizontal: width * 0.06,
    paddingTop: width * 0.04,
    paddingBottom: width * 0.06,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.04,
  },

  checkbox: {
    width: width * 0.06,
    height: width * 0.06,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF8C32',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.03,
    backgroundColor: '#FF8C32',

  },


  checkboxLabel: {
    flex: 1,
    color: '#333',
    fontSize: width * 0.033,
    lineHeight: width * 0.045,
  },

  link: {
    color: '#565656',
    fontWeight: '600',
  },

  privacyText: {
    textAlign: 'center',
    color: '#0B6BE9',
    marginTop: width * 0.05,
    fontSize: width * 0.049,
    textDecorationLine: 'underline',
      marginBottom: width * 0.05,
      fontWeight: '500',
  },
  waveBottom: {
  width: '100%',
  height: height * 0.05,
  resizeMode: 'cover',
  marginTop: -1,
    borderColor: '#FFFFFF',
},

errorText: {
  color: 'red',
  fontSize: width * 0.033,
  marginTop: width * 0.02,
  fontWeight: '500',
},


});



import { StyleSheet } from 'react-native';
import { px, deviceWidth, deviceHeight } from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
  },

  headerBackground: {
    width: deviceWidth,
    height: deviceHeight * 0.32,
    paddingHorizontal: deviceWidth * 0.06,
    paddingTop: deviceHeight * 0.07,
      marginBottom: deviceWidth * 0.04,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceWidth * 0.1,
    width: deviceWidth * 0.1,
    borderRadius: deviceWidth * 0.03,
    backgroundColor: '#FF8C32',
    borderColor: '#FFFFFF',
    borderWidth: px(2),
  },

  backArrow: {
    fontSize: deviceWidth * 0.07,
    color: '#FFFFFF',
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },

  skip: {
    color: '#FFFFFF',
    fontSize: deviceWidth * 0.04,
    fontWeight: '500',
    marginTop: deviceHeight * 0.015,
    marginBottom: deviceWidth * 0.04,
  },

  banner: {
    marginTop: deviceHeight * 0.015,
  },

  title: {
    color: '#fff',
    fontSize: deviceWidth * 0.065,
    fontWeight: '700',
    lineHeight: deviceWidth * 0.07,
    marginTop: deviceHeight * 0.01,
  },

  subtitle: {
    color: '#fff',
    fontSize: deviceWidth * 0.035,
    marginTop: deviceWidth * 0.02,
    width: '90%',
    lineHeight: deviceWidth * 0.05,
  },

  inputSection: {
    paddingHorizontal: deviceWidth * 0.06,
    marginTop: deviceWidth * 0.08,
  },

  label: {
    color: '#565656',
    fontWeight: '500',
    marginBottom: deviceWidth * 0.02,
    fontSize: deviceWidth * 0.035,
  },

  inputBox: {
    borderWidth: px(1),
    borderColor: '#ccc',
    borderRadius: deviceWidth * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: deviceWidth * 0.04,
    backgroundColor: '#fff',
  },

  flagIcon: {
    width: deviceWidth * 0.07,
    height: deviceWidth * 0.05,
    marginRight: deviceWidth * 0.02,
  },

  countryCode: {
    fontWeight: '600',
    fontSize: deviceWidth * 0.04,
    marginRight: deviceWidth * 0.02,
  },

  input: {
    flex: 1,
    paddingVertical: deviceWidth * 0.03,
    fontSize: deviceWidth * 0.045,
  },

  callIcon: {
    width: deviceWidth * 0.05,
    height: deviceWidth * 0.05,
    tintColor: '#FF8C32',
  },

  helperText: {
    marginTop: deviceWidth * 0.02,
    color: '#565656',
    fontSize: deviceWidth * 0.03,
      marginLeft: deviceWidth * 0.01,
      // lineHeight:11,
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF0ED',
    paddingHorizontal: deviceWidth * 0.06,
    paddingTop: deviceWidth * 0.04,
    paddingBottom: deviceWidth * 0.06,
    borderTopWidth: px(1),
    borderTopColor: '#eee',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: deviceWidth * 0.04,
  },

  checkbox: {
  width: deviceWidth * 0.070,
  height: deviceWidth * 0.070,
  borderRadius: px(8),
  borderWidth: px(2),
  borderColor: '#FF8C32',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FF8C32',
   marginRight: deviceWidth * 0.03,
},


  checkboxLabel: {
    flex: 1,
    color: '#333',
    fontSize: deviceWidth * 0.033,
    lineHeight: deviceWidth * 0.045,
  },

  link: {
    color: '#565656',
    fontWeight: '600',
  },

  privacyText: {
    textAlign: 'center',
    color: '#0B6BE9',
    marginTop: deviceWidth * 0.05,
    fontSize: deviceWidth * 0.049,
    textDecorationLine: 'underline',
    marginBottom: deviceWidth * 0.05,
    fontWeight: '500',
  },

  waveBottom: {
    width: '100%',
    height: deviceHeight * 0.05,
    resizeMode: 'cover',
    marginTop: px(-1),
    borderColor: '#FFFFFF',
  },

  errorText: {
    color: 'red',
    fontSize: deviceWidth * 0.033,
    marginTop: deviceWidth * 0.02,
    fontWeight: '500',
  },
});

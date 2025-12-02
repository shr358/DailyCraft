
import { StyleSheet } from 'react-native';
import { px, deviceWidth, deviceHeight } from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
  },

  headerBackground: {
    width: '100%',
    height: deviceHeight * 0.35,
       marginBottom: deviceWidth * 0.04,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: deviceWidth * 0.06,
    paddingTop: deviceHeight * 0.03,
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
    top:1,

  },

  banner: {
    paddingHorizontal: deviceWidth * 0.06,
    marginTop: deviceHeight * 0.02,
  },

  title: {
    fontSize: deviceWidth * 0.065,
    fontWeight: '700',
    color: '#fff',
  },

  subtitle: {
    fontSize: deviceWidth * 0.039,
    color: '#fff',
    marginTop: deviceHeight * 0.01,
    lineHeight: deviceWidth * 0.05,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: deviceWidth * 0.15,
    marginTop: deviceHeight * 0.05,
    marginLeft:px(10),
marginRight:px(10),
  },

  otpBox: {
    width: deviceWidth * 0.13,
    height: deviceWidth * 0.13,
    borderRadius: deviceWidth * 0.02,
    borderWidth: px(1.2),
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: deviceWidth * 0.05,
    color: '#1E293B',
    fontWeight: '600',
  },

  resendText: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: deviceWidth * 0.035,
    marginTop: deviceHeight * 0.02,
  },

  resendLink: {
    color: '#FF8C32',
    fontWeight: '600',

  },

  verifyButton: {
    position: 'absolute',
    bottom: deviceHeight * 0.04,
    alignSelf: 'center',
    width: deviceWidth * 0.9,
    backgroundColor: '#FF8C32',
    paddingVertical: deviceWidth * 0.035,
    borderRadius: deviceWidth * 0.02,
     marginBottom: deviceHeight * 0.02,
  },

  verifyButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: deviceWidth * 0.045,
    fontWeight: '600',
  },

  errorText: {
    color: 'red',
    fontSize: deviceWidth * 0.033,
    marginTop: deviceWidth * 0.03,
    fontWeight: '500',
    alignSelf: 'center',
  },
});

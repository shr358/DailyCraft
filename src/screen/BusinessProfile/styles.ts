

import { StyleSheet } from 'react-native';
import { deviceHeight as dh, deviceWidth as dw, px } from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: px(dw * 0.05),
    paddingTop: px(dw * 0.04),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: px(dw * 0.01),
  },

  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: px(dw * 0.1),
    width: px(dw * 0.1),
    borderRadius: px(dw * 0.03),
    backgroundColor: '#FF8C32',
  },

  headerText: {
    fontSize: px(dw * 0.06),
    fontWeight: '700',
    textAlign: 'center',
    width: '80%',
  },

  logoBox: {
    marginTop: px(dw * 0.04),
    alignSelf: 'center',
    width: '45%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: px(2),
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: px(dw * 0.05),
    padding: px(dw * 0.01),
    marginVertical: px(dw * 0.055),
    marginBottom: px(dw * 0.01),
    height: px(dw * 0.37),
  },

  logoText: {
    color: '#777',
    marginVertical: px(dw * 0.05),
    fontSize: px(dw * 0.03),
    alignSelf: 'center',
  },

  textlarge: {
    height: px(dw * 0.2),
    textAlignVertical: 'top',

  },

  uploadBtn: {},

  uploadimageicon: {
    paddingTop: px(dw * 0.01),
  },

  uploadIcon: {
    marginRight: px(dw * 0.01),
  },

  uploadText: {
    color: '#FFFFFF',
    marginTop: px(dw * 0.01),
    fontWeight: '600',
    fontSize: px(dw * 0.03),
    marginLeft: px(dw * 0.02),
  },

  logoImage: {
    marginTop: px(dw * 0.03),
  },

  label: {
    fontSize: px(dw * 0.035),
    marginTop: px(dw * 0.01),
    marginBottom: px(dw * 0.01),
    color: '#565656',
    marginLeft: px(dw * 0.02),
  },

  input: {
    borderWidth: px(1),
    borderColor: '#ddd',
    borderRadius: px(dw * 0.02),
    padding: px(dw * 0.03),
    fontSize: px(dw * 0.035),
    color: '#000',
  },

  bottomContainer: {
    marginTop: px(dw * 0.02),
  },

  continueText: {
    marginTop: px(dw * 0.02),
    color: '#fff',
    fontWeight: 'bold',
    fontSize: px(dw * 0.04),
    marginBottom: px(dw * 0.01),
  },

  switchBtn: {
    marginTop: px(dw * 0.01),
    marginBottom: px(dw * 0.02),
    alignItems: 'center',
  },

  switchText: {
    color: '#FF8C32',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: px(dw * 0.035),
  },

  switchtext1: {
    color: '#505050',
    marginBottom: px(dw * 0.015),
  },

  switchtext2: {
    color: '#FF8C32',
  },

  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: px(dw * 0.02),
  },

  uploadIconImage: {},

  pickButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: px(3),
    marginTop: px(dw * 0.01),
    width: px(dw * 0.2),
  },

  pickBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF8C32',
    paddingVertical: px(dw * 0.02),
    paddingHorizontal: px(dw * 0.01),
    borderRadius: px(dw * 0.02),
  },

  pickTxt: {
    color: '#FFF',
    marginLeft: px(6),
    fontSize: px(dw * 0.03),
    fontWeight: '500',
  },

  fullImage: {
    width: '100%',
    height: '100%',
    borderRadius: px(dw * 0.05),
  },
});

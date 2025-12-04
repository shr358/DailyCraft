

import { StyleSheet } from 'react-native';
import { deviceWidth, px } from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: px(20),
    // paddingTop: px(15),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: px(10),
  },

  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: px(44),
    width: px(44),
    borderRadius: px(15),
    backgroundColor: '#FF8C32',
    marginTop: px(15),
  },

  headerText: {
    fontSize: px(22),
    fontWeight: '600',
    textAlign: 'center',
    width: '80%',
    marginTop: px(15),
  },

  logoBox: {
    marginTop: px(20),
    alignSelf: 'center',
    width: deviceWidth * 0.45,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: px(2),
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: px(20),
    padding: px(5),
    marginVertical: px(25),
    marginBottom: px(10),
    height: deviceWidth * 0.37,
  },

  logoText: {
    color: '#777',
    marginVertical: px(15),
    fontSize: px(12),
    textAlign: 'center',
  },

  textlarge: {
    height: px(70),
    textAlignVertical: 'top',
  },

  label: {
    fontSize: px(16),
    marginTop: px(20),
    marginBottom: px(5),
    color: '#444',
    marginLeft: px(12),
  },

  input: {
    borderWidth: px(1),
    borderColor: '#ddd',
    borderRadius: px(12),
    padding: px(13),
    fontSize: px(16),
    color: '#000',
  },

  bottomContainer: {
    marginTop: px(30),
  },

  continueText: {
    marginTop: px(30),
    color: '#fff',
    fontWeight: 'bold',
    fontSize: px(18),
    marginBottom: px(5),
    textAlign: 'center'
  },

  switchBtn: {
    marginBottom: px(10),
    alignItems: 'center',
  },

  switchText: {
    color: '#FF8C32',
    textAlign: 'center',
    marginTop: px(20),
    fontWeight: '600',
    marginBottom: px(5),
  },

  switchtext1: { color: '#444' },
  switchtext2: { color: '#FF8C32' },

  logoImage: {
    marginTop: px(15),
  },

  uploadimageicon: {
    paddingTop: px(5),
  },

  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: px(10),
  },

  uploadIconImage: {},

  pickButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: px(5),
    width: deviceWidth * 0.3,
     marginBottom:px(5),
  },

  pickBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF8C32',
    paddingVertical: px(10),
    paddingHorizontal: px(4),
    borderRadius: px(10),
    // marginBottom:px(5),
  },

  pickTxt: {
    color: '#FFF',
    marginLeft: px(5),
    fontSize: px(12),
    fontWeight: '500',
  },

  fullImage: {
    width: '100%',
    height: '100%',
    borderRadius: px(20),
  },

  sheetOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  sheetContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: px(20),
    borderTopLeftRadius: px(20),
    borderTopRightRadius: px(20),
    elevation: 10,
  },

  sheetTitle: {
    fontSize: px(16),
    fontWeight: '600',
    marginBottom: px(15),
  },

  sheetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: px(10),
    paddingVertical: px(12),
  },

  sheetButtonText: {
    fontSize: px(15),
  },

  sheetCancel: {
    marginTop: px(10),
    alignItems: 'center',
    paddingVertical: px(12),
    backgroundColor: '#FF8C32',
  },

  sheetCancelText: {
    fontSize: px(16),
    color: 'red',
  },
});

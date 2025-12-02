// import {StyleSheet, Dimensions} from 'react-native';
// const { width } = Dimensions.get('window');

//  export default StyleSheet.create({
//   container: {
//     flex: 1,
//        backgroundColor: '#fff',
//     paddingHorizontal: width * 0.05,

//       paddingTop: width * 0.04,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: width * 0.02,
//   },
//   backBtn: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: width * 0.1,
//     width: width * 0.1,
//     borderRadius: width * 0.03,
//     backgroundColor: '#FF8C32',
//     marginTop:width * 0.04,
//   },
//   headerText: {
//   fontSize: width * 0.06,
//   fontWeight: '600',
//   textAlign: 'center',
//   width: '80%',
//   marginTop:width * 0.04,
//   },
//   logoBox: {
// marginTop: width * 0.04,
//   alignSelf: 'center',
//   width: '45%',
//   aspectRatio: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderWidth: 2,
//   borderStyle: 'dashed',
//   borderColor: '#ccc',
//   borderRadius: width * 0.05,
//   padding: width * 0.01,
//   marginVertical: width * 0.055,
//   marginBottom: width * 0.01,
//   // backgroundColor:'red',
//    height: width * 0.37,




//   },
//   logoText: {
//     color: '#777',
//     marginVertical: width * 0.05,
//       fontSize: width * 0.030,
//       alignSelf:'center',
//       alignItems:'center',
//       justifyContent:'center'
//   },

//   textlarge:{
//  height: width * 0.2,
//     textAlignVertical: 'top',
//   },
//   uploadBtn: {
//     //   flexDirection: 'row',
//     // backgroundColor: '#FF984F',
//     // paddingVertical: width * 0.01,
//     // paddingHorizontal: width * 0.01,
//     // borderRadius: width * 0.02,
//     // width:'90%',
//     // // height:'30%',
//     //    marginBottom: width * 0.06,
//   },
//   uploadIcon: {

//   },
//   uploadText: {
//     color: '#FFFFFF',
//     marginTop: width * 0.01,
//     fontWeight: '600',
//        fontSize: width * 0.03,
//       //  marginRight: width * 0.07,
//         marginLeft: width * 0.02,
//   },
//   log0upload:{
//   marginTop: width * 0.03,
//   },
//   label: {
//     fontSize: width * 0.035,
//     marginTop: width * 0.07,
//     marginBottom: width * 0.01,
//     color: '#444',
//        marginLeft: width * 0.02,

//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: width * 0.02,
//     padding: width * 0.04,
//     fontSize: width * 0.035,
//     color: '#000',
//   },
//  bottomContainer:{
// // paddingBottom: width * 0.09,
// marginTop: width * 0.09,
//  },
//   continueText: {
//     marginTop: width * 0.09,
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: width * 0.04,
//       marginBottom: width * 0.01,
//   },switchBtn:{
//   //  marginTop: width * 0.04,
//     marginBottom: width * 0.02,
//     alignItems: 'center',
//   },
//   switchText: {
//     color: '#FF8C32',
//     textAlign: 'center',
//     marginTop: width * 0.04,
//     fontWeight: '600',
//       marginBottom: width * 0.01,
//   },
//     switchtext1: {
//     color: '#444',

//   },
//   switchtext2: {
//     color: '#FF8C32',

//   },
//    logoImage:{
//   marginTop: width * 0.03,


//   },
//   uploadimageicon:{
// paddingTop:width * 0.01,


//   },
//   emptyBox: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: width * 0.02,
// },

// uploadIconImage: {
// },

// pickButtons: {
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: 3,
//   // marginTop: width * 0.01,
// width:  width * 0.3,
// },

// pickBtn: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   backgroundColor: '#FF8C32',
//   paddingVertical: width * 0.02,
//   paddingHorizontal: width * 0.03,
//   borderRadius: width * 0.02,
// },

// pickTxt: {
//   color: '#FFF',
//   marginLeft: 4,
//   fontSize: width * 0.03,
//   fontWeight: '500',
// },

// fullImage: {
//   width: '100%',
//   height: '100%',
//   borderRadius: width * 0.05,
// },

// sheetOverlay: {
//   flex: 1,
//   backgroundColor: 'rgba(0,0,0,0.4)',
// },

// sheetContainer: {
//   position: 'absolute',
//   bottom: 0,
//   width: '100%',
//   backgroundColor: '#fff',
//   padding: 20,
//   borderTopLeftRadius: 20,
//   borderTopRightRadius: 20,
//   elevation: 10,
// },

// sheetTitle: {
//   fontSize: 16,
//   fontWeight: '600',
//   marginBottom: 15,
// },

// sheetButton: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   gap: 10,
//   paddingVertical: 12,
// },

// sheetButtonText: {
//   fontSize: 15,
// },

// sheetCancel: {
//   marginTop: 10,
//   alignItems: 'center',
//   paddingVertical: 12,
//   backgroundColor:'#FF8C32',
// },

// sheetCancelText: {
//   fontSize: 16,
//   color: 'red',
// },


// });


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
    height: px(55),
    width: px(55),
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
    fontSize: px(14),
    textAlign: 'center'
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
    marginLeft: px(10),
  },

  input: {
    borderWidth: px(1),
    borderColor: '#ddd',
    borderRadius: px(12),
    // padding: px(15),
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
  },

  pickBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF8C32',
    paddingVertical: px(10),
    paddingHorizontal: px(12),
    borderRadius: px(10),
  },

  pickTxt: {
    color: '#FFF',
    marginLeft: px(5),
    fontSize: px(14),
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

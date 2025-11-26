// import {StyleSheet, Dimensions} from 'react-native';
// const { width } = Dimensions.get('window');

//  export default StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//        backgroundColor: '#fff',
//     paddingHorizontal: width * 0.05,
//     paddingTop: width * 0.04,
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
//   },
//   headerText: {
//   fontSize: width * 0.06,
//   fontWeight: '700',
//   textAlign: 'center',
//   width: '80%',
//   },

//   logoBox: {
//       marginTop: width * 0.06,
//   alignSelf: 'center',
//   width: '45%',
//   aspectRatio: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderWidth: 2,
//   borderStyle: 'dashed',
//   borderColor: '#ccc',
//   // borderRadius: width * 0.04,
//   // padding: width * 0.030,
//   // marginVertical: width * 0.03,
//   // marginBottom: width * 0.04,
//    borderRadius: width * 0.05,
//   padding: width * 0.01,
//   marginVertical: width * 0.055,
//   marginBottom: width * 0.01,
//   // backgroundColor:'red',
//    height: width * 0.37,
// },

//   logoText: {
//     color: '#777',
//     marginVertical: width * 0.05,
//       fontSize: width * 0.030,
//       alignSelf:'center',
//       justifyContent:'center',
//       alignContent:'center',

//   },

//   textlarge:{
//  height: width * 0.2,
//     textAlignVertical: 'top',
//   },
//   uploadBtn: {
//     //   flexDirection: 'row',
//     // backgroundColor: '#FF984F',
//     // paddingVertical: width * 0.01,

//     // borderRadius: width * 0.02,
//     // width:'100%',

//     //   marginBottom: width * 0.04,
//     //     marginLeft: width * 0.06,
//     //      marginRight: width * 0.06,

//   },

//   uploadimageicon:{
// paddingTop:width * 0.01,
//   },
//   uploadIcon: {
//     marginRight: width * 0.01,
//     // marginLeft: width * 0.01,
//   },
//   uploadText: {
//     color: '#FFFFFF',
//     marginTop: width * 0.01,
//     fontWeight: '600',
//        fontSize: width * 0.03,
//       //  marginRight: width * 0.07,
//         marginLeft: width * 0.02,
//   },
//   logoImage:{
//   marginTop: width * 0.03,
// //  paddingTop: width * 0.06,

//   },
//   label: {
//     fontSize: width * 0.035,
//     marginTop: width * 0.01,
//     marginBottom: width * 0.01,
//     color: '#444',
//        marginLeft: width * 0.03,

//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: width * 0.02,
//     padding: width * 0.03,
//     fontSize: width * 0.035,
//     color: '#000',
//   },
//  bottomContainer:{
// marginTop:width * 0.02,
// //  marginBottom: width * 0.01,
//  },
//   continueText: {
//     marginTop: width * 0.02,
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: width * 0.04,
//       marginBottom: width * 0.01,
//   },switchBtn:{
//    marginTop: width * 0.01,
//     marginBottom: width * 0.02,
//     alignItems: 'center',
//   },
//   switchText: {
//     color: '#FF8C32',
//     textAlign: 'center',
//     // marginTop: width * 0.02,
//     fontWeight: '600',
//       // marginBottom: width * 0.04,
//   },
//     switchtext1: {
//     color: '#505050',
//   marginBottom: width * 0.015,
//   },
//   switchtext2: {
//     color: '#FF8C32',

//   },

//    emptyBox: {
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
//   marginTop: width * 0.01,
// width:  width * 0.2,
// },

// pickBtn: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   backgroundColor: '#FF8C32',
//   paddingVertical: width * 0.02,
//   paddingHorizontal: width * 0.01,
//   borderRadius: width * 0.02,
// },

// pickTxt: {
//   color: '#FFF',
//   marginLeft: 6,
//   fontSize: width * 0.03,
//   fontWeight: '500',
// },

// fullImage: {
//   width: '100%',
//   height: '100%',
//   borderRadius: width * 0.05,
// },
// });


import { StyleSheet } from 'react-native';
import { deviceHeight as dh, deviceWidth as dw, px } from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: px(dw * 0.05),
    paddingTop: px(dw * 0.03),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: px(dw * 0.02),
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
    marginTop: px(dw * 0.06),
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
    color: '#444',
    marginLeft: px(dw * 0.03),
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

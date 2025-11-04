import {StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

 export default StyleSheet.create({
  container: {
    flex: 1,
       backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,

      paddingTop: width * 0.04,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.05,
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: width * 0.1,
    width: width * 0.1,
    borderRadius: width * 0.03,
    backgroundColor: '#FF8C32',
  },
  headerText: {
  fontSize: width * 0.06,
  fontWeight: '600',
  textAlign: 'center',
  width: '80%',
  },
  logoBox: {
marginTop: width * 0.06,
  alignSelf: 'center',
  width: '35%',
  aspectRatio: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 2,
  borderStyle: 'dashed',
  borderColor: '#ccc',
  borderRadius: width * 0.05,
  padding: width * 0.01,
  marginVertical: width * 0.050,
  marginBottom: width * 0.01,
  // backgroundColor:'red',
  },
  logoText: {
    color: '#777',
    marginVertical: width * 0.05,
      fontSize: width * 0.030,
      alignSelf:'center',
  },

  textlarge:{
 height: width * 0.2,
    textAlignVertical: 'top',
  },
  uploadBtn: {
      flexDirection: 'row',
    backgroundColor: '#FF984F',
    paddingVertical: width * 0.01,
    paddingHorizontal: width * 0.01,
    borderRadius: width * 0.02,
    width:'90%',
    // height:'30%',
       marginBottom: width * 0.06,
  },
  uploadIcon: {

  },
  uploadText: {
    color: '#FFFFFF',
    marginTop: width * 0.01,
    fontWeight: '600',
       fontSize: width * 0.03,
      //  marginRight: width * 0.07,
        marginLeft: width * 0.02,
  },
  log0upload:{
  marginTop: width * 0.03,
  },
  label: {
    fontSize: width * 0.035,
    marginTop: width * 0.07,
    marginBottom: width * 0.01,
    color: '#444',
       marginLeft: width * 0.02,

  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: width * 0.02,
    padding: width * 0.04,
    fontSize: width * 0.035,
    color: '#000',
  },
 bottomContainer:{
// paddingBottom: width * 0.09,
marginTop: width * 0.09,
 },
  continueText: {
    marginTop: width * 0.09,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.04,
      marginBottom: width * 0.01,
  },switchBtn:{
  //  marginTop: width * 0.04,
    marginBottom: width * 0.02,
    alignItems: 'center',
  },
  switchText: {
    color: '#FF8C32',
    textAlign: 'center',
    marginTop: width * 0.04,
    fontWeight: '600',
      marginBottom: width * 0.01,
  },
    switchtext1: {
    color: '#444',

  },
  switchtext2: {
    color: '#FF8C32',

  },
   logoImage:{
  marginTop: width * 0.03,
//  paddingTop: width * 0.06,

  },
  uploadimageicon:{
paddingTop:width * 0.02,
  },
});

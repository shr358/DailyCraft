import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
    backgroundImage: {
  // flex: 1,
  width: '100%',
  height: '100%',
},

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf:'center',
      justifyContent: 'center',
    padding: 12,
      //  paddingVertical: 15,
        position: 'relative',
  },
  backBtn: {
  position: 'absolute',
  top: 20,
  left: 15,
  backgroundColor: '#FFFFFF',
  borderRadius: 10,
  borderColor:'#C6C6C6',
  padding: 6,
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 3,
  zIndex: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 10,


  },
  logoBox: {
    // borderWidth: 2,
    // borderColor: '#f5a15d',
    // borderStyle: 'dashed',
    // borderRadius: 13,
    // padding: 10,
    // alignItems: 'center',
    // width: '35%',
    // // paddingHorizontal:22,
    // // height:'44%',
    // backgroundColor: '#FFFFFF',
    //   //  backgroundColor:'red',
    //    paddingVertical:1,

    borderWidth: 2,
  borderColor: '#f5a15d',
  borderStyle: 'dashed',
  borderRadius: 13,
  alignItems: 'center',
  justifyContent: 'center',
  width: '40%',
  aspectRatio: 1,
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',



  },
  uploadIconContainer: {
    // padding: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#ddd',
    marginBottom: 10,
  },
  logoImage: {
    // width: 60,
    // height: 60,
    // borderRadius: 10,
     width: '100%',
  height: '100%',
  resizeMode: 'cover', // fills the box
  borderRadius: 13,

  },
  uploadText: {
    fontSize: 12,
    color: '#575757',
    textAlign: 'center',
    marginVertical: 5,
  },
  uploadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff914d',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginTop: 8,
    marginBottom:5,
  },
  uploadBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },

  formContainer: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    color: '#424242',
    fontWeight: '500',
    marginBottom: 6,
    marginLeft:20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    marginLeft:10,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },

  bottomContainer: {
    paddingHorizontal: 2,
    marginLeft:10,
    // paddingLeft:30,
    // paddingRight:35,
    marginTop: 10,
    // marginLeft:10,
    // marginRight:10,
    // width:'90%',
  },

  switchContainer: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  switchText: {
    color: '#333',
  },
  switchHighlight: {
    color: '#ff914d',
    fontWeight: '600',
  },
});

export default styles;

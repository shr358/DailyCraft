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
    borderRadius:10,
  },
  contentContainer: {
    // flex: 1,
    // paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  header: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    lineHeight:31,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    lineHeight:26,
  },
  imageWrapper: {
    borderRadius: 15,
    overflow: 'hidden',
    // elevation: 4,
    backgroundColor: '#fff',
  },
  posterImage: {
    marginTop:20,
    width: 410,
    height: 540,
    borderRadius: 15,
    marginLeft:20,
    marginRight:20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '110%',
    marginTop: 20,
    // backgroundColor:'red',
  },
   downloadBtn: {
    flex: 1,
    backgroundColor: '#FF984F',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal:20,
    marginRight: 10,
      marginLeft: 10,
    alignItems: 'center',
    // width:'10%',
  },
  downloadText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  nextBtn: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
       paddingHorizontal:20,
    borderWidth: 1,
     marginRight: 10,
      marginLeft: 10,
    alignItems: 'center',
    borderColor:'#ddd',
    // width:'10%',
  },
  nextText: {
    color: '#252525',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default styles;

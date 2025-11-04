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
    fontSize: 32,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    lineHeight:30,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
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
    width: '95%',
    marginTop: 25,
  },
  downloadBtn: {
    flex: 1,
    backgroundColor: '#ff914d',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginRight: 10,
  },
  downloadText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  nextBtn: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#B6B6B6',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal:20,
    alignItems: 'center',
  },
  nextText: {
    color: '#252525',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    position: 'relative',
  },

  backBtn: {
    position: 'absolute',
    top: 20,
    left: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#C6C6C6',
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

  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    marginBottom: 5,
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
    marginLeft: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    marginLeft: 10,
  },

  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },

  bottomContainer: {
    paddingHorizontal: 2,
    marginLeft: 10,
    marginTop: 10,
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

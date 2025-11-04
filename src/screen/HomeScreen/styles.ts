import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // paddingHorizontal: 15,
    paddingTop: 20,
  },

  backgroundImage: {
  flex: 1,
  width: '100%',
  height: '100%',
},

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginRight:19,
    marginLeft:10,
  //  backgroundColor: '#FF984F',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:10,

  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 12,
    color: '#777',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    tintColor: '#000',
  },
  crownIcon: {
    width: 25,
    height: 25,
    // marginLeft: 15,
    tintColor: '#EEA83D',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 15,
    marginLeft:15,
    marginRight:15,
    borderColor:'#ddd',
    borderWidth:1,
      // backgroundColor:'#fff',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#000',
    // backgroundColor:'#fff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tab: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tabActive: {
    backgroundColor: '#FF984F',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  tabText: {
    fontSize: 13,
    color: '#444',
  },
  tabActiveText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  posterCard: {
    borderRadius: 18,
    overflow: 'visible',
    marginBottom: 15,
    //    width: 100,
    // height: 40,
  },
  posterImg: {
    width: '100%',
    height: 550,
    borderRadius: 5,

  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 90,
  },
  downloadBtn: {
    flex: 1,
    backgroundColor: '#FF984F',
    borderRadius: 10,
    paddingVertical: 12,
    marginRight: 10,
      marginLeft: 10,
    alignItems: 'center',
  },
  downloadText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  nextBtn: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    borderWidth: 1,
     marginRight: 10,
      marginLeft: 10,
    alignItems: 'center',
    borderColor:'#ddd',
  },
  nextText: {
    color: '#252525',
    fontWeight: '600',
    fontSize: 16,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 10,
    height: 70,
    borderRadius:50,
    backgroundColor: '#FFF0ED',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop:10,
    marginBottom:5,


  },
  navItem: {
    alignItems: 'center',
  },
  iconWrapper: {
    // width: 40,
    // height: 40,
    // borderRadius: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
     backgroundColor: '#FFF',
  borderWidth: 1,
  borderColor: '#E0E0E0',
  borderRadius: 10,
  padding: 6,
  marginLeft: 10,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,



  },

  iconContainer2:{
   backgroundColor: '#FFF',
  borderWidth: 1,
  borderColor: '#E0E0E0',
  borderRadius: 12,
  padding: 6,
  marginLeft: 10,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
  },
  activeIconBg: {
    backgroundColor: '#FF984F',
  },
  navIcon: {
    width: 32,
    height: 32,
    marginBottom:2,
    // marginTop:10,
  },
  navLabel: {
    fontSize: 12,
    marginTop: 3,
    fontWeight: '700',


  },
  download:{
     width: 30,
    height: 30,
    marginBottom:2,
  },
  filterBtn: {
  marginLeft: 8,
  // backgroundColor: '#fff',
  padding: 5,
  borderRadius: 8,
},

modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  backgroundColor: '#fff',
  width: '80%',
  borderRadius: 10,
  padding: 20,
},
modalTitle: {
  fontSize: 18,
  fontWeight: '700',
  marginBottom: 15,
  textAlign: 'center',
},
modalOption: {
  padding: 12,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  marginVertical: 5,
},
modalOptionSelected: {
  backgroundColor: '#FF7B54',
  borderColor: '#FF7B54',
},
modalOptionText: {
  fontSize: 16,
  textAlign: 'center',
},
closeBtn: {
  backgroundColor: '#FF7B54',
  marginTop: 15,
  borderRadius: 8,
  paddingVertical: 10,
},
closeBtnText: {
  color: '#fff',
  textAlign: 'center',
  fontWeight: '600',
},
headericon:{
 width: 25,
    height: 25,
    // marginLeft: 15,
    // tintColor: '#EEA83D',
    backgroundColor:'#fff',
},
navIconWrapper: {
  justifyContent: 'center',
  alignItems: 'center',
  width: 44,
  height: 44,
  borderRadius: 26,
  // marginBottom:5,
},

activeNavCircle: {
  backgroundColor: '#FF984F',
  elevation: 5,
},


});



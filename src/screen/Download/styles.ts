

// import { StyleSheet, Dimensions } from 'react-native';
// const { width } = Dimensions.get('window');
// const ITEM_MARGIN = 14;
// const ITEM_SIZE = (width - ITEM_MARGIN * 3) / 2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     width: '100%',
//     height: '100%',
//   },
//   header: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 15,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#000',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//     marginTop: 5,
//     width: '80%',
//     lineHeight: 25,
//   },


//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     // justifyContent: 'space-between',
//     paddingHorizontal: ITEM_MARGIN,
//     marginTop: 10,
//   },

//   gridItem: {
//     width: ITEM_SIZE,
//     height: ITEM_SIZE * 1.1,
//     backgroundColor: '#FFE6E0',
//     // borderRadius: 15,
//     borderColor: '#FFFFFF',
//     borderWidth: 8,
//     // marginBottom: ITEM_MARGIN,
//     overflow: 'hidden',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.08,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 1,
//     elevation: 2,
//   },

//   posterImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },

//   noDataText: {

// },

// });

// export default styles;

import { StyleSheet } from 'react-native';
import { px, deviceWidth } from '../../utils/dimensions';

const ITEM_MARGIN = px(14);
const ITEM_SIZE = (deviceWidth - ITEM_MARGIN * 3) / 2;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  backgroundImage: {
    width: deviceWidth,
    height: '100%',
  },
  header: {
    alignItems: 'center',
    marginTop: px(20),
    marginBottom: px(15),
    paddingHorizontal: px(20),
  },
  title: {
    fontSize: px(28),
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: px(16),
    color: '#555',
    textAlign: 'center',
    marginTop: px(5),
    width: deviceWidth * 0.8, // 80% width
    lineHeight: px(25),
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: ITEM_MARGIN,
    marginTop: px(10),
    //  width: deviceWidth  - px(20),
    marginLeft:px(10),
  },
  gridItem: {
    width: ITEM_SIZE,
    height: ITEM_SIZE * 1.1,
    backgroundColor: '#FFE6E0',
    borderColor: '#FFFFFF',
    borderWidth: px(8),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: px(2) },
    shadowRadius: px(1),
    elevation: 2,
  },
  posterImage: {
    width: '100%',
    height: '100%',
    borderRadius: px(8),
  },
  noDataText: {

  },
});

export default styles;


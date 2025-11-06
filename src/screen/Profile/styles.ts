
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { width: '100%', height: '100%' },

  headerContainer: { alignItems: 'center', marginTop: 15 },
  title: { fontSize: 27, fontWeight: '700', color: '#000' },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  profileImage: { width: 60, height: 60, borderRadius: 10 },
  profileInfo: { flex: 1, marginLeft: 10 },
  profileName: { fontSize: 16, fontWeight: '700', color: '#000' },

  roleBadge: {
    backgroundColor: '#FF984F',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  roleText: { color: '#fff', fontSize: 12, fontWeight: '600' },

  editButton: {
    backgroundColor: '#5C5FFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  editText: { color: '#fff', fontSize: 13, fontWeight: '600' },

  premiumCard: {
    flexDirection: 'row',
    backgroundColor: '#F38612',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 13,
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  premiumLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  premiumIcon: { width: 40, height: 40, marginRight: 10 },
  premiumTitle: { fontSize: 15, fontWeight: '700', color: '#fff' },
  premiumSubtitle: { fontSize: 13, color: '#fff', marginTop: 2 },
  upgradeButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  upgradeText: { color: '#F38612', fontSize: 12, fontWeight: '600' },

  // Section Styling
  sectionOuter: {
    backgroundColor: '#FFEFE3',
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 4,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  optionLeft: { flexDirection: 'row', alignItems: 'center' },
  optionText: { fontSize: 14, color: '#333', marginLeft: 10 },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginLeft: 32,
  },

  footerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 25,
    // padding:10,
    width:'100%',
    marginTop: 20,
  },
  footerButton: {
    width: (width - 60) / 2,
    // backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 15,
    borderWidth: 4,
    borderColor: '#fff',
  },
  footerText: { fontSize: 15, fontWeight: '600', color: '#000' },
    optionIcon: {
    width: 20,
    height: 20,
    tintColor: '#ff914d',
  },


});

export default styles;

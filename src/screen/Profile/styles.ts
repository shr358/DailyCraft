

import { StyleSheet } from 'react-native';
import { px, deviceWidth } from '../../utils/dimensions';

const FOOTER_BUTTON_WIDTH = (deviceWidth - px(60)) / 2;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { width: deviceWidth, height: '100%' },

  headerContainer: { alignItems: 'center', marginTop: px(15) },
  title: { fontSize: px(27), fontWeight: '700', color: '#000' },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: px(20),
    marginTop: px(20),
  },
  profileImage: { width: px(60), height: px(60), borderRadius: px(10) },
  profileInfo: { flex: 1, marginLeft: px(10) },
  profileName: { fontSize: px(16), fontWeight: '700', color: '#000' },

  roleBadge: {
    backgroundColor: '#FF984F',
    paddingHorizontal: px(10),
    paddingVertical: px(3),
    borderRadius: px(6),
    alignSelf: 'flex-start',
    marginTop: px(4),
  },
  roleText: { color: '#fff', fontSize: px(12), fontWeight: '600' },

  editButton: {
    backgroundColor: '#5C5FFF',
    paddingVertical: px(6),
    paddingHorizontal: px(12),
    borderRadius: px(8),
  },
  editText: { color: '#fff', fontSize: px(13), fontWeight: '600' },

  premiumCard: {
    flexDirection: 'row',
    backgroundColor: '#F38612',
    marginHorizontal: px(20),
    marginTop: px(20),
    borderRadius: px(13),
    padding: px(9),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  premiumLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  premiumIcon: { width: px(40), height: px(40), marginRight: px(10) },
  premiumTitle: { fontSize: px(15), fontWeight: '700', color: '#fff' },
  premiumSubtitle: { fontSize: px(13), color: '#fff', marginTop: px(2) },
  upgradeButton: {
    backgroundColor: '#fff',
    paddingVertical: px(5),
    paddingHorizontal: px(10),
    borderRadius: px(8),
  },
  upgradeText: { color: '#F38612', fontSize: px(12), fontWeight: '600' },

  // Section Styling
  sectionOuter: {
    backgroundColor: '#FFEFE3',
    borderRadius: px(15),
    marginHorizontal: px(20),
    marginTop: px(20),
    // padding: px(4),
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: px(12),
    paddingHorizontal: px(15),
    paddingVertical: px(10),
  },
  sectionTitle: {
    fontSize: px(15),
    fontWeight: '700',
    color: '#000',
    marginBottom: px(8),
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: px(8),
  },
  optionLeft: { flexDirection: 'row', alignItems: 'center' },
  optionText: { fontSize: px(14), color: '#333', marginLeft: px(10) },
  divider: {
    height: px(1),
    backgroundColor: '#EAEAEA',
    marginLeft: px(32),
  },

  footerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: px(25),
    width: deviceWidth,
    marginTop: px(25),
  },
  footerButton: {
    width: FOOTER_BUTTON_WIDTH,
    borderRadius: px(8),
    paddingVertical: px(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: px(4),
    borderColor: '#fff',
  },
  footerText: { fontSize: px(15), fontWeight: '600', color: '#000' },

  optionIcon: {
    width: px(20),
    height: px(20),
    tintColor: '#ff914d',
  },
});

export default styles;

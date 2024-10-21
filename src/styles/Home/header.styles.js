import {StyleSheet} from 'react-native';

const avatar = {
  width: 50,
  height: 50,
  borderRadius: 50,
  resizeMode: 'cover',
};

const logoText = {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
};

const headerContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  marginTop: 5
};

const iconsContainer = {
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
};

const messageBadge = {
  position: 'absolute',
  backgroundColor: 'red',
  zIndex: 1,
  paddingHorizontal: 4,
  borderRadius: 5,
  right: 0,
  top: -5,
};
const messageBadgeText = {
  fontSize: 10,
  color: 'white',
  fontWeight: '700',
};

const notficationBadge = {
  width: 10,
  height: 10,
  backgroundColor: 'red',
  borderRadius: 5,
  position: 'absolute',
  right: 0,
  borderWidth: 2,
  borderColor: 'white',
  zIndex: 1,
};

const styles = StyleSheet.create({
  headerContainer,
  avatar,
  logoText,
  iconsContainer,
  messageBadge,
  messageBadgeText,
  notficationBadge,
});

export default styles;

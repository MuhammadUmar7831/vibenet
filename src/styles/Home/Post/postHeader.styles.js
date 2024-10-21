import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;

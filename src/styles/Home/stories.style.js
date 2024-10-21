import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  storyText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10
  },
  scrollContent: {
    gap: 5,
  },
  thumbnail: {
    width: 150,
    height: 230,
    borderRadius: 10,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
    width: 150,
    height: 230,
  },
  avatarContainer: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#e5671f',
    padding: 1,
    position: 'absolute',
    left: 20,
    top: 10,
  },
  myStroy: {
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 1,
    position: 'absolute',
    left: 20,
    top: 10,
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    color: 'white',
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    bottom: 20,
    left: 20,
  },
});

export default styles;

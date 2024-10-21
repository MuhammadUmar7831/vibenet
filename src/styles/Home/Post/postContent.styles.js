import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  imageCounter: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    zIndex: 1,
    backgroundColor: '#f4f7f8',
    padding: 5,
    borderRadius: 5,
    top: 10,
    left: 10,
  },
  imageCounterText: {
    color: '#a2afba',
    fontSize: 17,
  },
  image: {
    width,
    height: 400,
    resizeMode: 'contain',
    backgroundColor: '#E4E4E4',
    borderWidth: 0.1,
    borderColor: 'white',
  },
  paginationDotsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    position: 'absolute',
    width,
    top: 415,
  },
  paginationDot: {
    width: 5,
    height: 5,
    borderRadius: 50,
  },
  actionsContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  actionsLeft: {
    flexDirection: 'row',
    gap: 7,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  likeCommentText: {
    fontSize: 17,
  },
  captionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  captionText: {
    color: '#18181B',
  },
  userName: {
    fontWeight: 'bold',
  },
  moreText: {
    color: 'gray',
  },
  timeAgoText: {
    fontSize: 13,
    paddingHorizontal: 10,
  },
});
export default styles;

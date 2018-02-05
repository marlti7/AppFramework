import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import actions from authReducer to pass as props to component
// import dumb component to be wrapped by container
import ChatScreen from '../scenes/ChatScreen';
import { chatAdd } from '../actions/chatSumActions';

// pass state attributes as props to ChatScreen
// authState attr comes from combineReducers
const mapStateToProps = state => ({
  chatSum: state.chatSum,
});

// pass Actions creators as props to ChatScreen
const mapDispatchToProps = dispatch => bindActionCreators({
  chatAdd,
}, dispatch);

// this wraps the dumb component (ChatScreen is presentational)
export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);

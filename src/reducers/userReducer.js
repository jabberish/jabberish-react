import {
  LOGIN_USER,
  LOGIN_USER_LOADING,
  LOGIN_USER_ERROR,
} from '../actions/userActions';

const initialState = {
  userId: null,
  username: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN_USER_LOADING:
      return { ...state, loading: true };
    case LOGIN_USER:
      return { 
        ...state, 
        loading: false, 
        userId: action.payload._id, 
        username: action.payload.username, 
        error: null 
      };
    case LOGIN_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

import { USER_ACTION_TYPES } from './userTypes';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER_ACTION_TYPES.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

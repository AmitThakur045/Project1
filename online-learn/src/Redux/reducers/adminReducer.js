import {
  ADD_ADMIN,
  ADD_BATCH,
  ADD_COURSE,
  ADD_STUDENT,
  DELETE_ADMIN,
  DELETE_COURSE,
  GET_ADMIN,
  GET_ALL_ADMIN,
  GET_ALL_COURSE,
  GET_ALL_STUDENT,
  GET_COURSE,
  GET_STUDENT,
  UPDATE_ADMIN,
} from "../actionTypes";

const initialState = {
  adminAdded: false,
  admin: {},
  adminUpdated: false,
  adminDeleted: false,
  courseAdded: false,
  course: {},
  courseDeleted: false,
  studentAdded: false,
  allStudent: [],
  allCourse: [],
  allAdmin: [],
  student: {},
  batchAdded: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADMIN:
      return {
        ...state,
        adminAdded: action.payload,
      };
    case GET_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    case UPDATE_ADMIN:
      return {
        ...state,
        adminUpdated: action.payload,
      };
    case DELETE_ADMIN:
      return {
        ...state,
        adminDeleted: action.payload,
      };
    case ADD_COURSE:
      return {
        ...state,
        courseAdded: action.payload,
      };
    case GET_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    case DELETE_COURSE:
      return {
        ...state,
        courseDeleted: action.payload,
      };
    case ADD_STUDENT:
      return {
        ...state,
        studentAdded: action.payload,
      };
    case GET_ALL_STUDENT:
      return {
        ...state,
        allStudent: action.payload,
      };
    case GET_ALL_ADMIN:
      return {
        ...state,
        allAdmin: action.payload,
      };
    case GET_STUDENT:
      return {
        ...state,
        student: action.payload,
      };
    case GET_ALL_COURSE:
      return {
        ...state,
        allCourse: action.payload,
      };
    case ADD_BATCH:
      return {
        ...state,
        batchAdded: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;

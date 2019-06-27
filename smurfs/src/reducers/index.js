import {
  ADD_SMURF_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  FETCH_FAIL,
  FETCH_START,
  FETCH_SUCCESS,
  UPDATE_SMURF_FAIL,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
} from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/


//  Your initial/default state for this project could *Although does not have to* look a lot like this

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetchingSmurfs: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null,
      }
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false,
      }
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: null,
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case UPDATE_SMURF_START:
      return {
        ...state,
        updatingSmurf: true,
      };
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        updatingSmurf: false,
        smurfs: action.payload,
      }
    case UPDATE_SMURF_FAIL:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      }
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default reducer;
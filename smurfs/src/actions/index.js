import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAIL = 'UPDATE_SMURF_FAIL';


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_FAIL,
        payload: err.response
      })
    })
}

export const addSmurf = (smurf) => dispatch => {
  dispatch({
    type: ADD_SMURF_START
  });
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: ADD_SMURF_FAIL,
        payload: err.response
      })
    })
}

export const updateSmurf = (smurf, id) => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => {
      dispatch({
        type: UPDATE_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: UPDATE_SMURF_FAIL,
        payload: err.response
      })
    })
}
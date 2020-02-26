import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_JOKE = 'UPDATE_JOKE';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios
        .get ('https://official-joke-api.appspot.com/jokes/ten')
        .then(res => {
            console.log(res.data);
        dispatch({type: UPDATE_JOKE, payload: res.data});
        })
    .catch(err => {
        console.error('errors fetching data', err);
        dispatch({type: SET_ERROR, payload: 'error fetching data from api'});
});
};
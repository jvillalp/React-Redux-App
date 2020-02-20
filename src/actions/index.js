import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const UPDATE_JOKE = 'UPDATE_JOKE';

export const getData = () => dispatch => {
    dispatch({type: GET_DATA});
    axios.get ('https://official-joke-api.appspot.com/jokes/ten')
    .then(res => console.log(res.data))
    dispatch({type: UPDATE_JOKE, payload: res.data})
    .catch(err => console.log('errors fetching data', err));
};
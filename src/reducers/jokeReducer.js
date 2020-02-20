import {GET_DATA, UPDATE_JOKE} from '../actions';

const initialState ={
    jokes:[],
    isFetchingData: false
};

// export const getData = () =>{
//     return{

//     }
// }

export const jokesReducer = (state=initialState, action) =>{
    switch(action.type) {
        case GET_DATA :
            return {
                ...state,
                isFetchingData: true
            };
        case UPDATE_JOKE:
            return{
                ...state,
                jokes:action.payload
            }
        default:
            return state;
    }
};
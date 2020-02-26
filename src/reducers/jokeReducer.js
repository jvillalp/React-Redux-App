import {FETCH_DATA, UPDATE_JOKE, SET_ERROR} from '../actions';

const initialState ={
    jokes:[],
    isFetchingData: false,
    error:''
};

// export const getData = () =>{
//     return{

//     }
// }

export const jokesReducer = (state=initialState, action) =>{
    switch(action.type) {
        case FETCH_DATA :
            return {
                ...state,
                isFetchingData: true,
                jokes: []
            };
        case UPDATE_JOKE:
            return{
                ...state,
                jokes:action.payload,
                isFetchingData: false
            };
            case SET_ERROR :
                return{
                    ... state,
                    isFetchingData: false,
                    error: action.payload
                }
        default:
            return state;
    }
};
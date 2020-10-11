import { SAVE_QUERY, SAVE_CHOICE, LOADING, LOGIN_STATUS, SOULTION_FOUND } from '../actions/types';

const initialState = {
    query: '',
    choice: [],
    loading: false,
    loggedIn: false,
    solution: false,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case SAVE_QUERY:
            return {
                ...state,
                query: action.payload,
            };
        case SAVE_CHOICE:
            return {
                ...state,
                choice: action.payload,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_STATUS:
            return {
                ...state,
                loggedIn: action.payload,
            };
        case SOULTION_FOUND:
            return {
                ...state,
                solution: action.payload,
            };
        default:
            return state;
    }
}
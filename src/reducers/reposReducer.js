import { SAVE_QUERY, SAVE_CHOICE, LOADING, LOGIN_STATUS, SOLUTION_FOUND, ADD_PHOTO, SAVE_AUTHENTICATION } from '../actions/types';

const initialState = {
    query: '',
    choice: [],
    loading: false,
    loggedIn: false,
    solution: false,
    photo: '',
    authentication: [],
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
        case SOLUTION_FOUND:
            return {
                ...state,
                solution: action.payload,
            };
        case ADD_PHOTO:
            return {
                ...state,
                photo: action.payload,
            };
        case SAVE_AUTHENTICATION:
            return {
                ...state,
                authentication: action.payload,
            };
        default:
            return state;
    }
}
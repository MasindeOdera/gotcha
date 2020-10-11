import { SAVE_REPOS, SAVE_QUERY, LOADING, LOGIN_STATUS, CLEAR_ITEMS } from '../actions/types';

const initialState = {
    query: '',
    items: [],
    loading: false,
    loggedIn: false,   
}

export default function (state = initialState, action) {
    switch(action.type) {
        // case FETCH_REPOS:
        //     return {
        //         ...state,
        //         items: action.payload.items || [],
        //         query: state.query,
        //         loading: false,
        //         currentPage: state.currentPage,
        //     };
        case SAVE_REPOS:
            return {
                ...state,
                items: action.payload
            }
        case SAVE_QUERY:
            return {
                ...state,
                query: action.payload,
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
        case CLEAR_ITEMS:
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
}
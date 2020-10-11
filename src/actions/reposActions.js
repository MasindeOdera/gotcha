import { SAVE_QUERY, SAVE_CHOICE, LOADING, LOGIN_STATUS, SOULTION_FOUND } from './types';

export const saveQuery = query => {
    return {
        type: SAVE_QUERY,
        payload: query
    }
};

export const saveChoice = choice => {
    return {
        type: SAVE_CHOICE,
        payload: choice
    }
};

export const setLoading = () => {
    return {
        type: LOADING
    }
};

export const loginStatus = login => {
    return {
        type: LOGIN_STATUS,
        payload: login
    }
};

export const solutionFound = solution => {
    return {
        type: SOULTION_FOUND,
        payload: solution
    }
};

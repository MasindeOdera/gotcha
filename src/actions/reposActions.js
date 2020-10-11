import { SAVE_QUERY, SAVE_CHOICE, LOADING, LOGIN_STATUS, SOLUTION_FOUND, ADD_PHOTO, SAVE_AUTHENTICATION } from './types';

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
        type: SOLUTION_FOUND,
        payload: solution
    }
};

export const addPhoto = photo => {
    return {
        type: ADD_PHOTO,
        payload: photo
    }
};

export const saveAuthentication = authentication => {
    return {
        type: SAVE_AUTHENTICATION,
        payload: authentication
    }
};

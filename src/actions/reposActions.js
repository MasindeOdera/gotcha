import { FETCH_REPOS, FETCH_QUERY, LOADING, LOGIN_STATUS, CLEAR_ITEMS } from './types';

export const fetchRepos = (currentPage, query) => dispatch => {
    let url = `https://api.github.com/search/repositories?q=${query}+in:repositories?page=${currentPage}&per_page=30`;
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_REPOS,   
        payload: data,     
    })).then(data => console.log({data}));

    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'text/xml');
    myHeaders.get('Content-Type') // should return 'text/xml';
    console.log(myHeaders);

};

export const fetchQuery = query => {
    return {
        type: FETCH_QUERY,
        payload: query
    }
};

// export const storeDetail = () => dispatch => {
//     dispatch({
//         type: STORE_DETAIL,
//     })
// };

// export const findUser = user => dispatch => {
//     fetch(`https://api.github.com/search/users?q=${user}`)
//     .then(res => res.json())
//     .then(data => dispatch({
//         type: FIND_USER,
//         payload: data.items,
//     })).then(data => console.log(data));
// };

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

export const clearItems = () => {
    return {
        type: CLEAR_ITEMS
    }
};

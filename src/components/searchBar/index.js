import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import './styles.scss';

const SearchBar = () => {

    const dispatch = useDispatch();
    // eslint-disable-next-line
    const state = useSelector((state) => state);
    // eslint-disable-next-line
    const [query, setQuery] = useState('');


    const handleSearch = (e) => {
        setQuery(e.target.value);
        //This makes sure the entire search is sent, sometimes it sends before query has updated.
        let query = e.target.value;
        dispatch({ type: "SAVE_QUERY", payload: query });
    };

    const handleQuery = (e) => {
        e.preventDefault();
        fetch(`https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${query}`)
        .then(res => res.json())
        .then(vehicle => {
            console.log({ vehicle });
            console.log(vehicle[0], vehicle.length);
            let choice = vehicle[0];
            dispatch({ type: "SAVE_CHOICE", payload: choice });
            if (vehicle.length > 0) {
                dispatch({ type: "SOLUTION_FOUND", payload: true });
            }
            else {
                dispatch({ type: "SOLUTION_FOUND", payload: false });
            }
        })
        .catch(error => {
            console.error({error});
        })
    };

    return (
        <div className="search">
            <form onSubmit={handleQuery}>
                <input type="search" placeholder="Search for license plate..." onChange={handleSearch} />
            </form>
        </div>
    )
}

export default connect(null)(SearchBar);

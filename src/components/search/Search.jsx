import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { show } from "../../redux/searchSlice";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [amount, setAmount] = useState(10);
    const dispatch = useDispatch();

    const onSearch = () => {
        dispatch(show({ searchText: searchTerm }));
    }
    return (
        <div>
            {/* <input
                type="text"
                onChange={(e) => { dispatch(show({ searchText: e.target.value })) }}
            /> */}
            {/* <p>search term : {searchTerm} </p> */}
            <TextField id="standard-basic" label="Standard" variant="standard" onChange={(e) => { setSearchTerm(e.target.value) }} />

            <FormControl >
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={amount}
                    label="Age"
                // onChange={(e) => { setAmount(e.target.value) }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <Button variant="outlined" onClick={onSearch}>search</Button>

        </div>
    )
}

export default Search

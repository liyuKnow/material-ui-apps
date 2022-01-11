import { Stack, Button, FormControl, InputLabel, MenuItem, Select, TextField, Grid, FormLabel, RadioGroup, Radio, Paper, FormControlLabel } from '@mui/material';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { show } from "../../redux/searchSlice";
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(theme => ({
    myBox: {
        display: 'flex',
    }
}));

const Search = () => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');
    const amount = useSelector(state => state.search.amount);
    const [perPage, setPerPage] = useState(amount);
    const dispatch = useDispatch();

    const onSearch = () => {
        dispatch(show({ searchText: searchTerm, amount: perPage }));
    }
    return (
        <Grid container >
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Grid container>
                        <Grid item>
                            <FormControl className={classes.myBox} component="fieldset">
                                <FormLabel component="legend">Search Here</FormLabel>
                                <Stack direction="row" spacing={2}>
                                    <Item>
                                        <TextField id="standard-basic" label="Standard" variant="standard" onChange={(e) => { setSearchTerm(e.target.value) }} />
                                    </Item>
                                    <Item>
                                        <FormControl>
                                            <InputLabel id="demo-simple-select-label">No of Images</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={amount}
                                                label="Age"
                                                onChange={(e) => { setPerPage(e.target.value) }}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={15}>Fifteen</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Item>
                                    <Item>
                                        <Button variant="outlined" onClick={onSearch}>search</Button>
                                    </Item>
                                </Stack>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Search

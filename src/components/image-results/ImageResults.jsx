import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { show } from "../../redux/searchSlice";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Badge } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ImageCard from '../Image-card/ImageCard';

const useStyles = makeStyles(theme => ({
    grid_container: {
        marginTop: 10,
    }
}));

const ImageResults = () => {
    const classes = useStyles();

    const [isLoading, setIsLoading] = React.useState(true);
    const [images, setImages] = React.useState([]);
    const [tags, setTags] = React.useState([]);

    const searchText = useSelector(state => state.search.searchText);
    const amount = useSelector(state => state.search.amount);
    // const images = useSelector(state => state.search.images);
    // console.log(amount)
    const dispatch = useDispatch();

    const fetchUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}`;

    useEffect(() => {
        // axios async await
        const fetchData = async () => {
            const res = await fetch(fetchUrl)
                .then(res => res.json())
                .then((data) => {
                    console.log(data.hits);
                    setImages(data.hits);
                    setIsLoading(false);
                }).catch(err => console.log(err));
        }
        fetchData();
    }, [searchText, amount]);
    return (
        <div>
            {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}

            {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :
                <Grid style={{ marginTop: 20 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={4}>
                            {images.map(image => (
                                <ImageCard image={image} key={image.id} />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            }
        </div >
    )
}

export default ImageResults

import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material';
const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    return (
        <>
            <Card key={image.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image.webformatURL}
                        alt="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Photo By {image.user}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Views : {image.views}, Downloads : {image.downloads}, Likes : {image.likes}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {tags.map((tag, index) => (
                    <Chip key={index} label={`#${tag}`} variant="outlined" />
                ))}
            </Card>
        </>
    )
}

export default ImageCard

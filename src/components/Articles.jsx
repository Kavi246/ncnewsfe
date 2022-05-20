import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Button, Card, CardMedia, Typography, CardContent, CardActions } from '@mui/material';


const Articles = () => {

    const [ allArticles, setAllArticles ] = useState([]);

    console.log(allArticles)

    useEffect(() => {
        axios.get(`https://nc-news-kpi.herokuapp.com/api/articles`)
        .then(({ data }) => {
            setAllArticles(data.articles);
        })
        .catch(err => console.log(err))
    }, [])

    const renderArticles = allArticles.map((article) => {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {article.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Read More</Button>
                </CardActions>
            </Card>
        )
    })

    return (
        <div>
            <h1>Articles</h1>
            <div>
                {renderArticles}
            </div>
        </div>
    )
}

export default Articles;
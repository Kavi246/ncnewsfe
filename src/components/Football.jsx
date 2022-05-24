import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Button, Card, CardMedia, Typography, CardContent, CardActionArea, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Football = () => {

    let navigate = useNavigate();

    const [ footballArticles, setFootballArticles ] = useState([]);
    
    useEffect(() => {
        axios.get(`https://nc-news-kpi.herokuapp.com/api/articles?topic=football`)
        .then(({ data }) => {
            setFootballArticles(data.articles);
        })
        .catch(err => console.log(err))
    }, [])

    const navigateToArticle = (id) => {
        navigate(`/articles/${id}`)  
    }

    const renderArticles = footballArticles.map((article) => {
        return (  
        <Grid item xs={4}>
            <Card sx={{ 
                maxWidth: 345, 
                maxHeight: 200, 
                margin: 3,
                backgroundColor: "white",
                }}>
                <CardActionArea onClick={() => navigateToArticle(article.article_id)}>
                <CardMedia
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {article.body.slice(0, 123)+"..."}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Grid>  
        )
    })

    return (
        <div>
            <h1 style={{color: "#090a12"}}>Football</h1>
            <Grid container>
                {renderArticles}
            </Grid>
            
        </div>
    )
}

export default Football;
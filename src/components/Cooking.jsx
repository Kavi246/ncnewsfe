import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link, Card, CardMedia, Typography, CardContent, CardActionArea, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Cooking = () => {

    let navigate = useNavigate();

    const [ cookingArticles, setCookingArticles ] = useState([]);
    
    useEffect(() => {
        axios.get(`https://nc-news-kpi.herokuapp.com/api/articles?topic=cooking`)
        .then(({ data }) => {
            setCookingArticles(data.articles);
        })
        .catch(err => console.log(err))
    }, [])

    const navigateToArticle = (id) => {
        navigate(`/articles/${id}`)  
    }

    const renderArticles = cookingArticles.map((article) => {
        return (  
        <Grid item xs={4}>
            <Card sx={{ 
                maxWidth: 345, 
                maxHeight: 200, 
                margin: 3,
                backgroundColor: "white",
                }}>
                <CardActionArea onClick={() => navigateToArticle(article.article_id)}>
                <Link sx={{
                    textDecoration: "none",
                    textDecorationColor: "none",
            }} to="1">
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
                </Link>
                </CardActionArea>
            </Card>
        </Grid>  
        )
    })

    return (
        <div>
            <h1 style={{color: "#090a12"}}>Cooking</h1>
            <Grid container>
                {renderArticles}
            </Grid>
            
        </div>
    )
}

export default Cooking;
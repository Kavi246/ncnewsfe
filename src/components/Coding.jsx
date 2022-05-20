import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Button, Card, CardMedia, Typography, CardContent, CardActions, Grid } from '@mui/material';


const Coding = () => {

    const [ codingArticles, setCodingArticles ] = useState([]);
    
    useEffect(() => {
        axios.get(`https://nc-news-kpi.herokuapp.com/api/articles?topic=coding`)
        .then(({ data }) => {
            setCodingArticles(data.articles);
        })
        .catch(err => console.log(err))
    }, [])

    const renderArticles = codingArticles.map((article) => {
        return (  
        <Grid item xs={4}>
            <Card sx={{ 
                maxWidth: 345, 
                maxHeight: 200, 
                margin: 3,
                backgroundColor: "white",
                }}>
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
            </Card>
        </Grid>  
        )
    })

    return (
        <div>
            <h1 style={{color: "#090a12"}}>Coding</h1>
            <Grid container>
                {renderArticles}
            </Grid>
            
        </div>
    )
}

export default Coding;
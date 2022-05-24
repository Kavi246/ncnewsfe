import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Button, Card, CardMedia, Typography, CardContent, CardActionArea, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const Article = () => {

    const [ article, setArticle ] = useState({});
    
    const { article_id } = useParams();
    useEffect(() => {
        axios.get(`https://nc-news-kpi.herokuapp.com/api/articles/${article_id}`)
        .then(({ data }) => {
            setArticle({...data.article});
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1 style={{color: "#090a12"}}>{article.title}</h1>
            <h3>by {article.author}</h3>
            <Typography>{article.body}</Typography>
        </div>
    )
}

export default Article;
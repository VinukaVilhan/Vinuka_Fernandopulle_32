import '../stylings/showRecipes.css'

import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



const ShowRecipe = () => {
    const [recipes, setRecipes] = useState([]);
   

    useEffect(()=> {
        axios
        .get('http://localhost:5000/recipes')
        .then((response) => {
            setRecipes(response.data.data);
            
        })
        .catch((error)=> {
            console.log(error);
           
        })
    }, []);


    return (
        <>
    
        <div className='container'>
                            {/* //iterates the books */}
                        {recipes.map((recipe)=> (

                                        <Card className='card' key={recipe._id} sx={{ maxWidth: 345  }}>
                                        <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image=""
                                            alt="Recipe photo"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                          
                                            </Typography>
                                            
                                            <Typography variant="body1" color="text.pimary">
                                                Ingredients: {recipe.ingredients}
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Instructions: {recipe.instructions}
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                        <Button size="small" color="primary">
                                            <Link>Share</Link>
                                        </Button>
                                        </CardActions>
                                        </Card>
                        ))}
                        
                       
                        
        </div>
        </>
    );
} 

export default ShowRecipe








    

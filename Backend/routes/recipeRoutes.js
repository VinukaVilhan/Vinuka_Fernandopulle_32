import express from "express";
import { Recipe } from "../models/recipeModel.js";

const router = express.Router();

// router.get('/:id', async (request, response) => {
//     try
//     {
//         const {id} = request.params;
//         const recipes = await Recipe.findById(id);
//         return response.status(200).json({
//              data:recipes
//         });
//     }
//     catch(error)
//     {
//         console.log(error.message);
//         response.status(500).send({message:error.message});

//     }
// });


router.get('/', async (request, response) => {
    try
    {
        const recipes = await Recipe.find({});
        return response.status(200).json({
            count: recipes.length,
            data: recipes
        });
    }
    catch(error)
    {
        console.log(error.message);
        response.status(500).send({message:error.message});

    }
});

router.post('/', async (request, response) => {
    try
    {
        if(!request.body.ingredients || !request.body.instructions && (!request.body.hours || !request.body.minutes))
        { 
            console.log('Fill the required fields');
            return response.status(400).send({message:'Fill all required fields'});
        }

        const newRecipe = {
            ingredients: request.body.ingredients,
            instructions: request.body.instructions,
            hours: request.body.hours,
            minutes: request.body.minutes
        };

        const recipe = await Recipe.create(newRecipe);
        
       
        console.log(recipe);
        return response.status(201).send(recipe);
    }
    catch(error)
    {
        console.log(error.message);
        response.status(500).send({message:error.message});

    }
});


router.put('/:id', async (request, response) => {
    try
    {
        if(!request.body.ingredients && !request.body.instructions && !request.body.hours && !request.body.minutes)
        { 
            console.log('No field has been cahnged');
            return response.status(400).send({message:'Insert new values to update'});
        }

        const {id} = request.params;

        const recipe = await Recipe.findByIdAndUpdate(id, request.body);

        if(!recipe)
        {
            return response.status(404).json({message:'Book not found'});
        }

        console.log("The Recipe has been updated");
        return response.status(200).json({message:"The Recipe has been updated"});
    }
    catch(error)
    {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});


router.delete('/:id', async (request, response) => {
    try
    {
        const {id} = request.params;

        const recipe = await Recipe.findByIdAndDelete(id);
        
        if(!recipe)
        {
            return response.status(404).json({message:'Book not found'});
        }

        console.log("The Recipe has been deleted");
        return response.status(200).json({message:"The Recipe has been Deleted"});

    }
    catch(error)
    {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});


export default router;
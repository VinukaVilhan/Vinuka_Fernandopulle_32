
import {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../stylings/createRecipe.css'

export default function CreateRecipe() {

    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [hours, setHours] = useState([]);
    const [minutes, setMinutes] = useState([]);
    const navigate = useNavigate();
    const handleCreateRecipe = (evt) => {

        evt.preventDefault();
        const data = {
            ingredients,
            instructions,
            hours,
            minutes
        };

        axios
        .post('http://localhost:5000/recipes/', data)
        .then(() => {
            alert('Book has been created')
            navigate('/');
        })
        .catch((error)=> {
            console.log(error);      
        })
    }
    
    return (
       <div className='container'>
            <Box onSubmit={handleCreateRecipe}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="on"
            >

            <h2>Create Recipe</h2>
         
                    <div>
                        <TextField
                        id="outlined-multiline-static"
                        label="Instructions"
                        multiline
                        rows={4}
                        value={instructions} onChange={(e)=> setInstructions(e.target.value)} required/>
                    
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Ingredients" variant="outlined" value={ingredients} onChange={(e)=> setIngredients(e.target.value)} required />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="hours" variant="outlined" value={hours} onChange={(e)=> setHours(e.target.value)}/>
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="minutes" variant="outlined"  value={minutes} onChange={(e)=> setMinutes(e.target.value)}/>
                    </div>
                        <Button variant="outlined" type="submit">Submit</Button>
                
            </Box>
       </div>
      );
   
}





// const CreateBook = () => {
//     const [title, setTitle] = useState([]);
//     const [author, setAuthor] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const handleSaveBook = (evt) => {

//         evt.preventDefault();
//         const data = {
//             title,
//             author
//         };

//         setLoading(true);

//         axios
//         .post('http://localhost:5555/books/', data)
//         .then(() => {
//             setLoading(false);
//             alert('Book has been created')
//             navigate('/');
//         })
//         .catch((error)=> {
//             console.log(error);
//             setLoading(false);
//             alert(error);
//             console.log(error);
//         })
//     }

//     return (
//             <>
//                 {loading ? (
//                     <Spinner/>
//                 ): (
//                     <>
//                        <form onSubmit={handleSaveBook}>
//                         <label htmlFor="title">Title</label>
//                             <input type="text" name="title" id="name" value={title} onChange={(e)=> setTitle(e.target.value)} required />
//                             <label htmlFor="author">Author</label>
//                             <input name="author" type="text"  id="author" value={author} onChange={(e)=> setAuthor(e.target.value)} required/>
//                             <button type="submit">Submit</button>
//                         </form>
//                     </>
//                 )}
//             </>
//     );
// } 

// export default CreateBook;








  
 

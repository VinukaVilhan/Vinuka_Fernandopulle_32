import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ShowRecipe from './pages/showRecipe';
import CreateRecipe from './pages/recipeCreate';
import DrawerAppBar from './componets/appbar';

function App() {

  return (
   
    <BrowserRouter>
      <DrawerAppBar/>
        <Routes>
        
          <Route path='/' element={<Home/>}/>
          <Route path='/recipes/create' element={<CreateRecipe/>}/>
          <Route path='/recipes/details' element={<ShowRecipe/>}/>
          {/* <Route path='/recipes/edit/:id' element={<EditBook/>}/>
          <Route path='/recipes/delete/:id' element={<DeleteBook/>}/> */}
        </Routes>
    </BrowserRouter>  
  )
}

export default App

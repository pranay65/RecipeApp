import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginError from './LoginError';
import axios from 'axios';

function Saved(){
    const [savedRecipes, setSavedRecipes] = useState([]);
    const username = window.localStorage.getItem('username');

    useEffect(() => {
        const getSavedRecipe = async () => {
            await axios.put('http://localhost:4500/recipes/saved', { username })
            .then(res=>{
                setSavedRecipes(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
        }
        getSavedRecipe();
    }, []);

    console.log(savedRecipes);

    if(username){
        return (
            <>  
            <div className="homeDiv">
           <h2 className="subtitle">Saved Recipes</h2>
           <ul>
            {
                savedRecipes.map((recipe) => (
                    <li className="recipe-card" key={recipe.recipeID}>
                        <img src={recipe.imgURL} />
                        <h3>{recipe.name}</h3>
                        <div className="inst">
                            <h4>Instructions</h4>
                            <p>{recipe.instructions}</p>
                        </div>
                        <h4>Time Required: {recipe.time}</h4>
                    </li>
                ))
            }
           </ul>
        </div>
            </>
        );
    }else{
        return <LoginError/>;
    }
}

export default Saved;
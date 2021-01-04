import React, {useState,useEffect} from 'react';
import './App.css';
import Recipe from "./Recipe";



function App() {
  const appID = '5cc405be';
  const appKey = '287aa34277f3c25153a7b9b1ba90cdca';

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');

  const url = "https://api.edamam.com/search?q=" + query +"&app_id="+ appID +"&app_key="+ appKey;

useEffect(() => {
  getRecipe();
},[query]);

const getRecipe = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setRecipes(data.hits);
};

const update = event => {
  setSearch(event.target.value);

};

const getSearch = event => {
event.preventDefault();
setQuery(search);
  setSearch('');

};


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
      <input className="search-input" type="text" value={search} onChange={update} />
      <button className="search-button" type="submit">Search</button>
      </form>
<div className="recipes">
      {
        recipes.map(recipe => (
            <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
        ))
      }
</div>
    </div>
  );
}

export default App;

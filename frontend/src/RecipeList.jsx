import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry,setSelectedCountry]=useState("All")
  // const [ingredients,setIngredients]=useState("All")
  const [search, setSearch] = useState(``);
  const  [isChecked,setIsChecked] = useState(false)

  const toggleIsChecked = () => setIsChecked(value => !value);

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

    useEffect(() => {
    fetch("http://localhost:5000/api/countries")
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  const RecipesToFilter = recipes.filter((value)=>{
    if(selectedCountry==="All"){
      return true
    }else{
      return (value.country===selectedCountry && value.is_vegan===isChecked) 
      }
    }
  )

  return (
    <div>
      <h1>🍴 Recettes du monde</h1>

      <input
            type="text"
            className="input"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          {/* <h2>Ingredients:</h2>
          <input
            type="text"
            className="input"
            onChange={(e) => setIngredientSearch(e.target.value)}
            placeholder="Search an ingredient..."
          /> */}

    <input type="checkbox" id="is_vegan" name="is_vegan" value={isChecked} onChange={toggleIsChecked}/>
    <label for="is_vegan">Plat Végan</label>

        <select name="filter" onChange={e => setSelectedCountry(e.target.value)}>
          <option value="All">Filter by country</option>

          {countries.map( country => (
            <option value={country.name}>{country.name}</option>

          ))}
        </select>

            {RecipesToFilter
              .filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
              .map( recipe => ( 
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: 10,
              padding: 15,
              marginBottom: 15,
              cursor: "pointer"
            }}
          >
            <h2>{recipe.name}</h2>
            <p><strong>Pays :</strong> {recipe.country}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RecipeList;

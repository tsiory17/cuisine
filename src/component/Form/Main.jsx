import "./Main.css"
import React from "react"
export default function Main(props){

  // const listIngredient 
  const [listIngredients,setListIngredients] = React.useState([])
  const totalIngredients = listIngredients.map(ingredient => <li key = {ingredient} >{ingredient}</li>)
  function AddIngredient(event) {

    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const ingredientToAdd = formData.get("ingredient")
    console.log(ingredientToAdd)
    // listIngredient.push(ingredientToAdd)
    // alert (listIngredient)
    
    setListIngredients(prevListIngredient => [
                        ...prevListIngredient ,
                        ingredientToAdd
    ])
    event.currentTarget.reset()

  }



   return(
    <main>
      <form onSubmit={AddIngredient} action="post">
        <input type="text" placeholder="e.g onion" size={40} name="ingredient"/>
        <button > Add Ingredients</button>
      </form>

      <ul>
      {totalIngredients}
      </ul>
    </main>
  )
}
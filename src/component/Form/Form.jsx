import "./Form.css"
export default function Form(){
  return(
    <form action="post">
      <input type="text" placeholder="e.g onion" size={40}/>
      <button type="submit"> Add Ingredients</button>
    </form>
  )
}
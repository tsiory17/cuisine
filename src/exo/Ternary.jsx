import React from "react";

//Toggle function 

// export default function Ternary(){
//   // const isGoingOut = false 

//   const [isGoingOut , setIsGoingOut] = React.useState(false)

//   function toggle (){
//     // if true change to false
//     // isGoingOut ? setIsGoingOut(false) : setIsGoingOut(true) 
//     setIsGoingOut(prev => !prev)
//   }

//   return (
//     <>
//       <h1>so you feel like going out tonight</h1>
//       <button className="value" onClick={toggle}>{isGoingOut ? "Yes" : "No"}</button>
//     </>
//   )
// }

export default function Ternary () {
  // const myFavoriteThings = []
  const allFavoriteThings = ["rose" , "cat" , "bubble"]



  const [myFavoriteThings , setMyFavoriteThings] = React.useState(["pasta"])
  const thingsElements = myFavoriteThings.map (thing => <p key={thing}>{thing}</p>)
  function addFavoriteThing () {
      setMyFavoriteThings( prevThings => {
        [
        ...prevThings,
        allFavoriteThings[prevThings.length-1]
      ]})
  }
return (
  <>
    <button onClick={addFavoriteThing}>Add item</button>
    <section>
      {thingsElements}
    </section>
  </>
)

}
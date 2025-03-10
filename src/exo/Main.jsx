export default function Main (props) {
 
  function handleClick(){
    alert("Kiss kiss")
  } 
  
  return (
    <>
      <h1 onMouseOver={() => alert(props.inside)}>Put your mouse over here</h1>
      <button onClick={handleClick}> Click</button>
    </>
  )
}
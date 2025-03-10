import { useState } from "react"
import React from "react"
export default function State() {
  
  const [buttonResult, setButtonResult] = React.useState(0)
  const [title , setTitle] = React.useState("Is state important to know ?")
  function handleClickButtonAdd () {
    setButtonResult(prevResult => prevResult + 1 )
  }

  function handleClickButtonReduce () {
    const result = buttonResult - 1 
    setButtonResult(result)
  }


  function handleHoverTitle (event) {
    setTitle("What the fuck bro")
    event.CurrentTarget.reset()
  }
  return (  
    <>
      <h1 className="title" style={{marginLeft: "100px"}}>{buttonResult} </h1>
      <button className="value" onClick={handleClickButtonReduce}>CLick here To reduce </button>
      <button className="value" onClick={handleClickButtonAdd}>CLick here To add </button>
    </>
  )
}
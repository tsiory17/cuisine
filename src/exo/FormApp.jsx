import React from "react";
import "./FormApp.css"
export default function FormApp() {

	function handleSubmit (event) {
		event.preventDefault()
		const myForm = event.currentTarget
		const formData = new FormData(myForm)

		const firstName = formData.get("firstName")
		const lastName = formData.get("lastName")

		console.log(firstName)
		console.log(lastName)

		myForm.reset()
	}
  return(
    <>
    <form onSubmit={handleSubmit} method="POST" id="my-form">
			<label htmlFor="first-name">First Name: </label>
			<input type="text" id="first-name" name="firstName" class="input" />
			<br />
			<label htmlFor="last-name">Last Name: </label>
			<input type="text" id="last-name" name="lastName" class="input" />
			<br />
			<button>Submit</button>
	  </form>
    </>
  )
}
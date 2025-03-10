import React from "react";
import "./Complex.css"
export default function Complex() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
})


function toggleFavorite() {
    setContact(prevContact => {
      return {
        ...contact,
        isFavorite : !prevContact.isFavorite
      }
    })
}

let starIcon = contact.isFavorite ? "https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/user.png?raw=true" : "https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/star-filled.png?raw=true"
return (
    <main>
        <article className="card">
            <img
                src= {starIcon}
                className="avatar"
                alt="User profile picture of John Doe"
            />
            <div className="info">
                <button
                    onClick={toggleFavorite}
                    aria-pressed={false}
                    className="favorite-button"
                >
                    <img
                        src="https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/star-empty.png?raw=true"
                        alt="empty star icon"
                        className="favorite"
                    />
                </button>
                <h2 className="name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="contact">+1 (212) 555-1212</p>
                <p className="contact">itsmyrealname@example.com</p>
            </div>

        </article>
    </main>
)
} 
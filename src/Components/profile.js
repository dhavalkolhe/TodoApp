import React from 'react'
import img from './logo.jpg'

function Profile() {
    return (
        <div className="profile">
            <div className="img-container">
                <img src = {img} alt = ""></img>
            </div>
            <h2 className="about">Welcome Ricky Morty!</h2>
        </div>
    )
}

export default Profile
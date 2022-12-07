import React from "react";

const UserPage = ({user}) => {

    const basketItems = user.basket.map((item, index) => {
        console.log(user.basket)
        return <li key={index}>{item.title} by {item.artist}</li>
    })

    return(
        <div>
            <h1>Hello, {user.name}</h1>

            <p>Your basket:</p>
            <ul>
            {basketItems}
            </ul>
        </div>
    )
}

export default UserPage;
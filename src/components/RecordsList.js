import React, { useState } from "react";
import styled from "styled-components";

const RecordsList = ({records, handleClick}) => {
    
    const [basket, setBasket] = useState([])

    const onClick = (event) => {
        event.preventDefault()
        handleClick(event.target.value)
    }

        const AlbumContainer = styled.ul`
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background-color: #ecd9ba;
        `

        const Album = styled.li`
        font-family: "futura";
        list-style: none;
        padding: 10px;
        color: navy;
        `

    const BasketButton = styled.button`
        border-radius: 10px ;
        width: 10em;
        `
    const albums = records.map((album, index) => {
        return (
        <>
            <Album key={index}>{album.title} by {album.artist}</Album>
            <BasketButton onClick={onClick} value={index}>Add to basket</BasketButton>
        </>
        )
    })

    return(
        <AlbumContainer>
            {albums}
        </AlbumContainer>
    )
}

export default RecordsList;
import React from "react";
import styled from "styled-components";

const StoreContainer = () => {

    return(
        <Body>
        <Title>Welcome to the record store!</Title>
        <Title>Today's Featured Record</Title>
        <FeaturedAlbum>
            <FAItem><img src="https://media.pitchfork.com/photos/5929be57c0084474cd0c2e8c/1:1/w_450%2Cc_limit/45e3c196.jpeg"></img></FAItem>
            <FAItem>Channel Orange</FAItem>
            <FAItem>Frank Ocean</FAItem>
        </FeaturedAlbum>
        </Body>
    )
    }

    const Title = styled.h3`
        font-family: 'futura';
        text-align: center;
        padding: 1em;
        color: navy

    `
    const Body = styled.body`
        background-color: #ecd9ba;
    `

    const FeaturedAlbum = styled.ul`
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        list-style: none;
        font-size: 2em;
    `

    const FAItem = styled.li`
        font-family:"futura";
    `

export default StoreContainer;
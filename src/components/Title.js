import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const Title = () => {

    return(
        <div>
        <TitleStyle>Record Store</TitleStyle>
        <NavBar>
            <NavBarItem>
                <Link to="/">Home</Link>
            </NavBarItem>
            <NavBarItem>
                <Link to="/all">All Records</Link>
            </NavBarItem>
            <NavBarItem>
                <Link to="/account">Account</Link>
            </NavBarItem>
        </NavBar>
        </div>
    )
    }
    
    const TitleStyle = styled.h1`
        font-family: 'futura';
        text-align: center;
        padding: .5em;
        color: navy;
        background-color: #ecd9ba;
        margin-top: 0px;

    `

    const NavBar = styled.ul`
        display: flex;
        justify-content: space-around;
        list-style: none;
    `
    const NavBarItem = styled.li`
        color: navy;
        text-decoration: none;
    `

export default Title;
import React from 'react'
import styled from 'styled-components'

const NavStyle = styled.div`
    background-color: black;
    color: white;
    padding: 2rem;
    font-family: Roboto;
`

export default function Navbar() {
    return (
        <NavStyle>
            <h1>The Midnight Podcast</h1>
        </NavStyle>
    )
}

import React from 'react'
import {Outlet} from "react-router-dom"
import NavBar from "./NavBar"

function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <NavBar/>
        </header>
        <main><Outlet/></main>
        <footer></footer>
    </div>
  )
}

export default RootLayout
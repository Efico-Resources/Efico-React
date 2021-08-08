import React from 'react'
import { Link } from "react-router-dom"

let liStyle= {
    borderRadius: 0,
    background: "transparent",
    boxShadow: "none"
}

function Navlinks({linkName, link, color}) {
    return (
        <li className="nav-item" style={liStyle}>
            <Link to={link} className="nav-link" style={{color}}>{linkName}</Link>
        </li>
    )
}

export default Navlinks

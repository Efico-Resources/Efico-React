import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Navlinks from './Navlinks.component';


let onScroll = {
    background: "white",
    color: "#252525"
}

let onStill = {
    background: "transparent",
    color: "white"
}



let navLinksArray = [
    {linkName: "Home", link: "/"},
    {linkName: "About", link: "/about"},
    {linkName: "Blog", link: "/blog"},
    {linkName: "Services", link: "/services"},
    {linkName: "Community", link: "/community"},
    {linkName: "Contact Us", link: "/contact-us"}
]


class Navbar extends Component{
    constructor(){
        super()
        this.state= {
            onScrollStyle: onStill,
            textColor: onStill.color,
            scrolling: "",
            img: "./Assets/img/Efico logo.png"
        }

        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    

    handleScroll(){
        window.scrollY > 50 ? this.setState({scrolling: "fixed-top", onScrollStyle: onScroll, textColor: onScroll.color, img: "./Assets/img/Efico logo 1.png"}) : this.setState({scrolling: " ", onScrollStyle: onStill, textColor: onStill.color, img: "./Assets/img/Efico logo.png"})
        // console.log(scroll);

    }
    render(){
        return(
            <div className="nav-container" >
            <nav className={`navbar navbar-expand-sm ${this.state.scrolling}`} id="navBar" style={this.state.onScrollStyle}>
                <Link className="navbar-brand" to="/"><img className="logo" src={this.state.img} alt="Efico Logo" /></Link>
                <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#eficoNav">
                    <span className="mobile-navbtn"><i className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="eficoNav">
                    <ul className="navbar-nav ml-auto">
                        {navLinksArray.map((link, key) => {
                            return(
                                <Navlinks linkName={link.linkName} link={link.link} color={this.state.textColor} key= {key} />
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar

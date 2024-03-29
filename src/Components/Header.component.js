import React, { Component } from 'react';

import Navbar from './Navbar.component';

class Header extends Component{
    render(){
    const {image, title, subtitle, showBtn, showSearch, onKeywordChanged} = this.props;
        return(
        <header className={image}>
        <Navbar />
                <div className="header-contents" >
                    <div className="header-title">
                        <h1>{title}</h1>
                    </div> 
                    <div className="header-caption">
                        {subtitle}
                    </div>
                    { showBtn &&
                        <div className="header-button" style={{marginTop: 80 + "px"}}>
                        <a href="https://linktr.ee/Efico" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black"}} className="yBtn">
                            Start here
                        </a>
                    </div>}
                    {
                        showSearch && 
                        <div className="search-btn">
                        <span className="fas fa-search "></span>
                        <input id="search" onChange={onKeywordChanged} type="text" name="search" placeholder="Search keywords to find answers" />
                        </div>
                    }
                </div>
        </header>
        )
    }
}

export default Header;
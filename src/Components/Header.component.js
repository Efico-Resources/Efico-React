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
                        <div className="header-button">
                        <button className="yBtn">
                            Get Started
                        </button>
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
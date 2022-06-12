import React, { Component } from 'react';

import ProjectNavBar from './ProjectNavBar';

class ProjectHeader extends Component{
    render(){
    const {image, title, subtitle, subsubtitle, showBtn, showSearch, onKeywordChanged} = this.props;
        return(
        <header className={image}>
        <ProjectNavBar />
                <div className="header-contents" >
                    <div className="header-title" >
                        <h1 >{title}</h1>
                    </div> 
                    <div className="header-caption">
                        {subtitle}
                    </div>
                    <div className="header-caption" style={{margin: '2rem'}}>
                        {subsubtitle}
                    </div>
                    { showBtn &&
                        <div className="header-button" style={{marginTop: 80 + "px"}}>
                        <a href="http://eepurl.com/g1dJmP" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black"}} className="yBtn">
                            Get Started
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

export default ProjectHeader;
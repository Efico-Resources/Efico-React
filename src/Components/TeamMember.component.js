import React from 'react'

function TeamMember({name, title, bio}) {
    return (
        <div className="team-member" id="Our-team">
            <div className="team-member-img">
                <img src={`Assets/img/${name}.jpg`} alt={`${name}`} />
            </div>
            <div className="team-member-bio">
                <div className="name-title">
                    <h3 className="name">{name}</h3>
                    <p className="title">{title}</p>
                </div>
                <p className="bio">
                    {bio}
                </p>
                <div className="social-links">
                    <div className="icons">
                        <a href="">
                            <img src="Assets/img/Linkedin-icon.svg" alt="Linkedin-icon" />
                        </a>
                        <a href="">
                            <img src="Assets/img/Gmail-icon.svg" alt="Gmail-icon" />
                        </a>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default TeamMember

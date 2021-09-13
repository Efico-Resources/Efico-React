import React from 'react'
import { Link } from 'react-router-dom'

function TeamMember({name, title, bio, linkedin, email}) {
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
                        <Link to={linkedin}>
                            <img src="Assets/img/Linkedin-icon.svg" alt="Linkedin-icon" />
                        </Link>
                        <Link to={`mailto: ${email}`}>
                            <img src="Assets/img/Gmail-icon.svg" alt="Gmail-icon" />
                        </Link>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default TeamMember

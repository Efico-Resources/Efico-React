import React from 'react'
import { Link } from 'react-router-dom'

export const HoverCards = ({text, img, description, index}) => {
    return (
        <div>
                <div className="wwd-card " data-aos="fade-right" data-aos-delay={50 + (50 * index)} data-aos-offset="0">
                    <div className={`card-text-container ${img}`}>
                        <div className="card-text">
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className="hovering">
                        <div className="hover-text">
                            <h3>{text}</h3>
                        </div>
                        <div className="hover-desc">
                            {description}                        
                        </div>
                        <div className="link-arrow">
                            <Link to="/services">
                            <img src="Assets/img/arrow icon training.svg" alt="Arrow icon link"/>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}


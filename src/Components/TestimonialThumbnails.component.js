import React from 'react'

function TestimonialThumbnails({name, testimonial, school}) {
    return (
        <div className="testimonial-thumbnails">
            <div className="testimonial-img">
                <img src={`Assets/img/${name}.jpg`} alt={name} />
            </div>
            <div className="testimonial-content">
                <div className="testimonial-words">
                    {testimonial}
                </div>
                <div className="testimonial-credentials">
                    <h2 className="name">{name}</h2>
                    <p className="school">{school}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialThumbnails

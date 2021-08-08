import React from 'react'

function TestimonialThumbnails({name, testimonial, school}) {
    return (
        <div class="testimonial-thumbnails">
            <div class="testimonial-img">
                <img src={`Assets/img/${name}.jpg`} alt={name} />
            </div>
            <div class="testimonial-content">
                <div class="testimonial-words">
                    {testimonial}
                </div>
                <div class="testimonial-credentials">
                    <h2 class="name">{name}</h2>
                    <p class="school">{school}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialThumbnails

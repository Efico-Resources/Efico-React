import React from 'react'

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";


// import SwiperCore, {Navigation, Pagination, Scrollbar, A11y } from "swiper";

// // import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import TestimonialThumbnails from './TestimonialThumbnails.component';


// let testimonialArray = [
//     {name: "Anyawu Glory", testimonial: "“Efico is an eye opener! It has helped me make the right decisions as to the skills to learn that suit my personality type. In just a limited time frame, I have amassed alot.”", school: "UNILAG"},
//     {name: "Owoloja Blessing Oluwafoyinsayemi", testimonial: "“I'm glad I took the opportunity to train with Efico! This platform has taught me so much and opened me up to opportunities I didn't know ever existed. I am glad about the opportunity to leverage. I look forward to an amazing journey as I continue with her.”", school: "Covenant University"},
//     {name: "Emmanuel Osuagwu", testimonial: "“As a chemical engineering student, I did the Aspen Hysys program, and to be sincere, the level of training has impacted me in so many ways”", school: "FUTO"},
//     {name: "Jessica Obodo Elue", testimonial: "“My experience as a member of the EFICO Hub Babcock University has been absolutely amazing, the programs and teaching sessions has helped me to gain requisite skills needed to make me be of value. I have learnt so many lessons so far which is mind-blowing and the best part is that I didn’t have to pay a fee to be a member of the hub, so it is quality acquisition of knowledge at no cost whatsoever.”", school: "Babcock University"}
// ] 

// // install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Testimonial() {
    return (
        <section className="testimonials">
        <h2 className="section-title">Testimonials</h2>
        <div className="section-caption">
            What people are saying about us
        </div>
        {/* <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {testimonialArray.map((testimony, index) => {
                return(
                    <SwiperSlide>
                        <TestimonialThumbnails {...testimony} key={index}/>
                    </SwiperSlide>
                )
            })}
        </Swiper> */}
    </section>
    )
}

export default Testimonial

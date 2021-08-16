import React from 'react'
import Footer from '../Components/Footer.component';

import Header from '../Components/Header.component';
import ServiceSection from '../Components/Services/ServiceSection.component'

function ServicesPage() {
    return (
        <div>
            <Header 
                title="What we do"
                subtitle="We build a community of undergraduates who have undergone self-analysis and understand
                their unique strength and place in value creation. We help them with resources that help them
                succeed in the long-term."
                image="service"
            />
            <ServiceSection />
            <Footer />
        </div>
    )
}

export default ServicesPage

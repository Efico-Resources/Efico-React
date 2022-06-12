import React from 'react'
import CommunityWrapper from '../Components/Community/CommunityWrapper.component'
import Footer from '../Components/Footer.component'
import Header from '../Components/Header.component'

function CommunityPage() {
    return (
        <div>
            <Header 
                title="Our Community"
                subtitle="We provide unique resources that help them create value and increase their knowledge about what they are passionate about. It helps us reach our shared goals faster and foster a sense of
                security."
                image="community"
            />
            <CommunityWrapper /> 
            <Footer />
        </div>
    )
}

export default CommunityPage

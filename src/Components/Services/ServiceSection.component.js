import React from 'react'

function ServiceSection() {
    return (
        <div>
        <div className="Self-Assessment d-flex justify-content-center align-items-center">
            <div className="container text-center py-5">
                <h1>Self Assessment Test</h1>
                <h5 className="mt-5">We help undergraduates discover their natural zone of competence using a personalized self-assessment test</h5>
                <p className="mt-5">The self assessment is delivered by the campus ambassadors to their hub members. It is also delivered on our online community to members who are interested in analysing and finding themselves and their unique interests. When you "get started" with us, an automated welcome message is sent to you by the Founder which contains all instructions including the personality tests</p> 
                <button className="pBtn px-5 mt-3">Get started</button>
            </div>
        </div>

        <div className="Training d-flex justify-content-center align-items-center">
            <div className="container text-center py-5">
                <h1>Training</h1>
                <h5 className="mt-5">Physical and virtual training are organisation by our campus ambassadors and others from the central management</h5>
                <p className="mt-5">We organize several training spanning across digital marketing, engineering softwares, Business analysis, and several skills training for members of our community. These trainings are held periodically according to the demand of the populace</p>
                <button className="pBtn px-5 mt-3">Get started</button>
                <p className="mt-3"><a href="/">Become an Efico sponsor!</a></p>
            </div>
        </div>

        <div className="Writing d-flex justify-content-center align-items-center">
            <div className="container text-center py-5">
                <h1>Writing</h1>
                <h5 className="mt-5">We offer all forms of writing services- CV, applications, scholarship and business plan writing</h5>
                <p className="mt-5">While we teach members how to write, we also have experts on our team who specialize in business writing, CV writing, applications, scholarships and forms of professional writing</p>
                <button className="pBtn px-5 mt-3">Get started</button>
            </div>
        </div>

        <div className="Affiliate d-flex justify-content-center align-items-center">
            <div className="container text-center py-5">
                <h1>Affiliate Program</h1>
                <h5 className="mt-5">We leverage our vast community of university and secondary school students organisations to reach a large audience base through a commission or sponsorship of any of our events</h5>
                <p className="mt-5">We help you effectively market your product to our high-targeted market with low-budget, low efforts and time, and at a well-contained risk-level, By leveraging our community, we assure a high return on your investements, and increased brand awareness among undergraduates and secondary school students which have a ripple effect on your business.</p>
                <button className="pBtn px-5 mt-3">Get started</button>
            </div>
        </div>

        <div className="Business d-flex justify-content-center align-items-center">
            <div className="container text-center py-5">
                <h1>Business &amp; Career Development</h1>
                <h5 className="mt-5">We develop and facilitate business/career training sessions.</h5>
                <p className="mt-5"> We help career enthusiasts with the process of making decisions for long term learning; aligning their personal needs of fulfilment with career advancement opportunities.</p>
                <button className="pBtn px-5 mt-3">Get started</button>
            </div>
        </div>

        </div>
    )
}

export default ServiceSection

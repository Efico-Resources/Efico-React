import React from 'react'

function CommunityWrapper() {
    return (
        <div>
        <div className="Facebook-section d-flex justify-content-center align-items-center">
            <div className="container text-center mt-5 py-5 inner-section">
                <h1>Facebook Community</h1>
                <div className="bg-image text-white facebook-image-section mt-5 d-flex justify-content-center align-items-center px-2">
                    <p>Community members get answers to their questions through experts that are part of our community</p>
                </div>
                <button className="pBtn mt-3">Join</button>
            </div>
        </div>

        <div className="Telegram-section d-flex justify-content-center align-items-center">
            <div className="container text-center mt-5 py-5 inner-section">
                <h1>Telegram Community</h1>
                <div className="bg-image text-white telegram-image-section mt-5 d-flex justify-content-center align-items-center px-2">
                    <p>Our telegram community allows thousands of undergraduates and secondary school to bond interact, and share opportunities among themselves</p>
                </div>
                <button className="pBtn mt-3">Join</button>
            </div>
        </div>

        <div className="Whatsapp-section d-flex justify-content-center align-items-center">
            <div className="container text-center mt-5 py-5 inner-section">
                <h1>Whatsapp Community</h1>
                <div className="bg-image text-white whatsapp-image-section mt-5 d-flex justify-content-center align-items-center px-2">
                    <p>By joining our whatsapp community you are being held on the platform temporarily, informed about our modus operandi and then discharged to your campus ambassador that adds you to your university or secondary community</p>
                </div>
                <button className="pBtn mt-3">Join</button>
            </div>
        </div>    
        </div>
    )
}

export default CommunityWrapper

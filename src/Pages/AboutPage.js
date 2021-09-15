import React, { PureComponent } from 'react'
import Footer from '../Components/Footer.component';

import Header from '../Components/Header.component';
import OurTeam from '../Components/OurTeam.component';
import WeStandFor from '../Components/We-Stand-For/WeStandFor.component';

let teamMemberArray = [
    {name: "David Adefunmilayo", title: "Founder & Director", bio: "David Adefunmilayo is a graduate of Petroleum Training Institute and also a graduate of university of Lagos. He has accumulated a two-year experience with the Department of Petroleum Resources where he was saddled with the responsibility of advising oil and gas companies for the government. He is a lover of Rhythm And Poetry and he engages in it at his leisure.", linkedin: "http://linkedin.com/in/adefunmilayo-david", email: "David.Adefunmilayo@eficoresource.com"},
    {name: "Funmilayo Oyekanmi", title: "Operations Consultant", bio: "Funmilayo is a career consultant passionate about helping youths unleash their potential. She is also a management consultant with years of experience spanning across sales, operations and research. She enjoys giving back to her society by volunteering in the areas of her strength.", linkedin: "https://www.linkedin.com/in/layooye/", email: "angeloyekanmi@gmail.com"},
    {name: "Joy Emekpo", title: "Head of Finance", bio: "Funmilayo is a career consultant passionate about helping youths unleash their potential. She is also a management consultant with years of experience spanning across sales, operations and research. She enjoys giving back to her society by volunteering in the areas of her strength.", linkedin: "https://www.linkedin.com/in/joy-emekpo-337b59167", email: "joyemekpo@gmail.com"},
    {name: "Harith Onigemo", title: "Technology Lead", bio: "Harith Onigemo is a software developer who is passionate about impacting lives and making a difference. He loves implementing beautiful UI designs and building Web applications.", linkedin: "https://www.linkedin.com/in/harith-onigemo/", email: "onigemotosin@gmail.com"},
    {name: "Dayo Oyefeso", title: "Lead Designer", bio: "Dayo is a creative designer, content creator and storytelling with a unique mix of digital marketing, problem solving and communications skills. He has worked on diverse ranges of design brief and is an avid help to see younger folks succeed.", linkedin: "https://www.linkedin.com/company/efico-resources", email: "admin@eficoresource.com"},
    {name: "Felicia Oyeniran", title: "Media & Communications Lead", bio: "Felicia is a graduate of industrial chemistry but has overtime indulged her creative side towards journalism. She presently work as an on Air personality and edition with search FM 92.3.", linkedin: "https://www.linkedin.com/in/felicia-oyeniran-5bb544181", email: "funmifelicia54@gmail.com"},
    {name: "Goodness Nwadibie", title: "Marketing Manager", bio: "Goodness is an enthusiastic Digital marketer with industry knowledge in digital content creation and marketing. Her love for going back to her community has driven her passion to help young folks build profitable online brand through content creation.", linkedin: "https://www.linkedin.com/in/goodness-nwadibie-the-digitor-0a8373131", email: "nwadibiegoodness@gmail.com"},
]

class AboutPage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header 
                    title = "About Us"
                    image = "about"
                />
                <WeStandFor />
                <OurTeam team={teamMemberArray}/>
                <Footer />
            </div>
        )
    }
}

export default AboutPage

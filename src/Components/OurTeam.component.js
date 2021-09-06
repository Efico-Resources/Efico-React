import React from 'react'


import TeamMember from './TeamMember.component'



// let homeTeamMemberArray = [teamMemberArray[0], teamMemberArray[1]]

function OurTeam({targetRef, team}) {
    return (
        <section class="our-team">
            <h2 class="section-title">Our Team</h2>
            <div class="section-caption">
                Meet the Efico Resources Team
            </div>
            <div class="our-team-content">
                {team.map((member, key) => {
                    return(
                        <TeamMember {...member} key= {key} />
                    )
                })}
            </div>
    </section>
    )
}

export default OurTeam

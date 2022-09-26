import React from 'react';

const Info = () =>{
    return(
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award '></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4 Years Working</span>
            </div>

            <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">35+ projects</span>
            </div>

            <div className="about__box">
            <i class='bx bx-support about__icon' ></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info
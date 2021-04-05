import React from 'react';
import './About.css';
import profile from '../../images/profile.jpg';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';

const About = () => {
    return (
        <div>
            <h1 className="color-secondary text-center py-4 about-heading">About Me</h1>
            <hr />
            <div className="row p-5 d-flex justify-content-center align-items-evenly">
                <div className="col-md-6 col-sm-10 my-auto">
                    <p className="text-justify">Hi, This is <span className="color-primary">Mahadi Hasan</span>. I'm 20 year old's full stack developer from Bangladesh. I am a student of Cumilla Polytechnical Institute, department of Computer Science. I also student of Programming Hero.</p>
                </div>
                <div className="col-md-3 col-sm-6 ml-5">
                    <img src={profile} className="about-profile" alt="" />
                </div>
            </div>

            <div className="text-center pb-4">
                <div className="contact-me">
                    <h3 className="pl-3 mb-4">Contact With Me</h3>
                </div>
                <a href="https://www.linkedin.com/in/mahadi-hasan-605b03202/" target="_blank" className="social-logo"><img src={linkedin} className="pl-3" alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100022929606176" target="_blank" className="social-logo"><img src={facebook} className="pl-3" alt="" /></a>
                <a href="https://www.instagram.com/mehedi_hasan_mh_24/" target="_blank" className="social-logo"><img src={instagram} className="pl-3" alt="" /></a>

            </div>
        </div>
    );
};

export default About;
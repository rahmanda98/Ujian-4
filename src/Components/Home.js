import React, { Component } from 'react';

//import Context from './Context';


class Home extends Component {
    constructor(props) {
        super(props);
        this.setState ={

        }
    }

    render() {
        return (
            <section classNam="section-header">
                <div className="container">
                <div className="main-menu" id="main-menu">
			            <ul class="main-menu-list">
				            <li><a href="#page-resume" class="link-home">Home</a></li>
				            <li><a href="#page-resume" className="link-page">Resume</a></li>
				            <li><a href="#page-skills" className="link-page">Skills</a></li>
				            <li><a href="#page-portfolio" className="link-page">Portfolio</a></li>
				            <li><a href="#page-blog" className="link-page">Blog</a></li>
				            <li><a href="#page-contact" className="link-page">Contact</a></li>
			            </ul>
		        </div>
                
                <div className="section-vcardbody section-home">
                    <div className="vcard-profile-pic">
				        <img src="img/profile2.jpg" alt=""/>
				        <img src="img/profile.jpg"class="profileActive" alt=""/>
			        </div>

                    <div className="vcard-profile-description">
                        <h1 className="profile-title">Hi, i'm <span class="color1">John Rex!</span></h1>
				        <h2 className="profile-subtitle">Web Designer & Developer</h2>
                        <hr className="hr1"></hr>
                        <div className="vcard-profile-description-text">
                            <p>Founder of DotRex. Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.</p>
                        </div>

                        <div className="vcard-profile-description-feature">
                            <div className="vcard-profile-description-ft-item">
                                <p>email:  john@dotrex.co / phone +123 456 789 111</p>
                            </div>
                        </div>
                    </div>

                    <div className="vcard-footer">
                        <div class="footer-social-icons">
					        <a href="#"><i class="fa fa-instagram"></i></a>
					        <a href="#"><i class="fa fa-facebook"></i></a>
					        <a href="#"><i class="fa fa-twitter"></i></a>
					        <a href="#"><i class="fa fa-linkedin"></i></a>
					        <a href="#"><i class="fa fa-youtube"></i></a>
				        </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}
export default Home;
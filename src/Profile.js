import React from "react";

function Profile() {
    return(
        <div className="proflie-container">
            
            <h1 id="name">Batam Singh</h1>
            <p id="designation">Software Developer</p>
            <div className="button-container">
                <button className="profile-button">LinkedIn</button>
                <button className="profile-button" >GitHub</button>
            </div>            
            <div className="divider"></div>
            <section className="about">
                <h1>About</h1>
                <p> I recently earned my Bachelor of Computer Applications (BCA)
                     degree, and I am on a passionate journey to become a skilled 
                     software developer. My academic background has provided me 
                     with a solid foundation in computer science, and I am excited 
                     to apply my knowledge to real-world projects.</p>

                <h1>My Interests</h1>
                <p>As a passionate full-stack web developer, I thrive on the 
                    art and science of creating seamless digital experiences. 
                    
                </p>
                <p>Beyond coding, I find joy in problem-solving and continuous 
                    learning. The dynamic nature of technology motivates me to 
                    stay ahead of the curve, adopting new frameworks, exploring 
                    emerging technologies, and contributing to open-source projects. 
                    I believe in the power of user-centric design, aiming to 
                    craft not just functional but delightful experiences 
                    for users.
                </p>
            </section>
            <div className="divider"></div>
        </div>
    )
}


export default Profile;
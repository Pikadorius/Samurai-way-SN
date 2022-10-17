import React from 'react';

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""/>
            </div>
            <div className="about">
                <img src="https://world.edu/wp-content/uploads/2020/05/Professional-Programmer.jpg" alt=""/>
                About me
            </div>
            <div className="posts">
                Posts
                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
            Main content
        </div>
    );
};

export default Profile;
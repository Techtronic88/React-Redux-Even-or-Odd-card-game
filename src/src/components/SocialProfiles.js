import React from 'react';
import SOCIALPROFILES from "../data/socialProfile";




const SocialProfiles = () =>  (
    <div>
    {
        SOCIALPROFILES.map((PROFILE) => {
            return (
                <SocialProfile key={PROFILE.id} socialProfile={PROFILE} />
            );
        })
    }
    </div>
    )


const SocialProfile = props => {
    
    const {link, image} = props.socialProfile    
        return (
         <div style={{display: "inline-block"}}>
           <a href={link}><img src={image} alt="social-profile" style={{ width: 70, height: 70, margin: 35, }}  /></a>
         </div>   
       )
}


export default SocialProfiles


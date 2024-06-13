import ProfileBar from "./UserProfileComponents/ProfileBar";
import ProfilePicture from "./UserProfileComponents/ProfilePicture";
import ProfileInfoGroup from "./UserProfileComponents/ProfileInfoGroup";

import "../index.css";
import { useState, useEffect } from "react";
import api from "../utils/api";

export default function UserProfile(){
    const [userData, setUserData] = useState({
        "user": "",
        "city": "", 
        "email": "",
        "user_description": "",
        "user_profile_picture": ""
    });

    useEffect(
        () => {
            const response = api.get("api/user_profile/");
            response
            .then((res) => {
                const data = res.data;
                for(let key in data){
                    setUserData(
                        (prev) => { return {...prev, [key]: data[key]} }
                    )
                }
            })
            .catch((error) => alert(error.response.data))
        },
        []
    );
    return (
        <>
            <ProfileBar username={userData.user} />
            <div className="d-flex flex-row p-3 justify-content-between border">
                <ProfilePicture srcPath={userData.user_profile_picture} />
                <div className="p-2 d-flex flex-column align-items-center justify-content-between" style={{width: "100%", height: "250px"}}>
                    <ProfileInfoGroup fieldValue={userData.user} />
                    <ProfileInfoGroup fieldValue={userData.email} />
                    <ProfileInfoGroup fieldValue={userData.city} />
                </div>
            </div>
            <div className="mt-3 p-3">
                {userData.user_description}
            </div>
        </>
    );
};
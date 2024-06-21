import ProfileBar from "./UserProfileComponents/ProfileBar";
import ProfilePicture from "./UserProfileComponents/ProfilePicture";
import ProfileInfoGroup from "./UserProfileComponents/ProfileInfoGroup";
import UserDescription from "./UserProfileComponents/UserDescription";

import "../index.css";
import { useState, useEffect } from "react";
import api from "../utils/api";

export default function UserProfile(){
    const [userData, setUserData] = useState({
        "id": "",
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
            <div className="d-flex flex-row p-3 justify-content-between">
                <ProfilePicture srcPath={userData.user_profile_picture} profileId={userData.id} />
                <div className="p-2 d-flex flex-column align-items-center justify-content-center" style={{width: "100%", height: "250px"}}>
                    <div className="container">
                        <label className="m-1">Email</label>
                        <ProfileInfoGroup value={userData.email} inputName={"email"} profileId={userData.id} />
                    </div>
                    <div className="container">
                        <label className="m-1">City</label>
                        <ProfileInfoGroup value={userData.city} inputName={"city"} profileId={userData.id} />
                    </div>
                </div>
            </div>
            <UserDescription description={userData.user_description} profileId={userData.id} inputName={"user_description"} />
        </>
    );
};
import ProfileBar from "./UserProfileComponents/ProfileBar";
import ProfilePicture from "./UserProfileComponents/ProfilePicture";
import ProfileInfoGroup from "./UserProfileComponents/ProfileInfoGroup";

import "../index.css";

export default function UserProfile(){
    return (
        <>
            <ProfileBar />
            <div className="d-flex flex-row p-3 justify-content-between border">
                <ProfilePicture />
                <div className="p-2 d-flex flex-column align-items-center justify-content-between" style={{width: "100%", height: "250px"}}>
                    <ProfileInfoGroup fieldValue={"Nazar2005"} />
                    <ProfileInfoGroup fieldValue={"n.rudovich2005@gmail.com"} />
                    <ProfileInfoGroup fieldValue={"Minsk"} />
                </div>
            </div>
            <div className="mt-3 p-3">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
        </>
    );
};
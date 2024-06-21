import ModalForm from "./ModalForm";

import api from "../../utils/api";

export default function ProfilePicture({ srcPath, profileId }){
    const getUserPicture = () => {
        return srcPath ? `${api.defaults.baseURL}/${srcPath}` : "/user_avatar.png";
    };  

    return (
        <div className="p-2 m-2" style={{width: "400px", height: "400px"}}>
            <img src={getUserPicture()} width={"100%"} height={"100%"} className="rounded m-1" />
            <div className="p-2 d-flex flex-row align-items-center justify-content-center">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Upload new photo
                </button>
            </div>
            <ModalForm profileId={profileId} />
        </div>
    );
};
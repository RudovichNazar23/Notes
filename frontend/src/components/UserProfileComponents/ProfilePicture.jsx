import api from "../../utils/api";

export default function ProfilePicture({ srcPath }){
    return (
        <div className="p-2" style={{width: "400px", height: "400px"}}>
            <img src={`${api.defaults.baseURL}/${srcPath}`} width={"100%"} height={"100%"} className="rounded" />
        </div>
    );
};
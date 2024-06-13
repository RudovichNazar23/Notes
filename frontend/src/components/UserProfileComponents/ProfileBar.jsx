import NavBarContainer from "../NavPanelComponents/NavBarContainer";
import NavBarButton from "../NavPanelComponents/NavBarButton";

import { useNavigate } from "react-router-dom";

export default function ProfileBar({ username }){
    const navigate = useNavigate();

    return (
        <NavBarContainer>
            <NavBarButton buttonValue={"Back"} onClick={() => navigate("/")} />
            <div><h4>{username}</h4></div>
            <div></div>
        </NavBarContainer>
    );
};
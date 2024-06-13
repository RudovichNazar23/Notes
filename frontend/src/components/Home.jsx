import NavBarButton from "./NavPanelComponents/NavBarButton";
import CreateNoteForm from "./CreateNoteForm";
import NoteContainer from "./NoteContainer";
import NavBarContainer from "./NavPanelComponents/NavBarContainer";

import "../index.css";

import api from "../utils/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const [userInfo, setUserInfo] = useState(undefined);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        api.get("api/get_request_user/").then(
            (response) => {
                setUserInfo(response.data)
            }
        ).catch((error) => {
            alert(error.reponse.data);
            navigate("/")
        });
    }, []);

    const onLogout = (event) => {
        event.preventDefault();
        localStorage.clear();
        navigate("/login");
    };

    const onSetIsOpen = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavBarContainer>
                <NavBarButton buttonValue={"Logout"} onClick={onLogout}/>
                <NavBarButton buttonValue={isOpen ? "Back to my notes" : "Create note"} onClick={onSetIsOpen} />
                <div className="p-1">
                    {
                        userInfo && (
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <NavBarButton buttonValue={userInfo.username} onClick={() => navigate("/profile")} />
                                <img src="/user.png" />
                            </div>
                        )
                    }
                </div>
            </NavBarContainer>
            <div className="container mt-5 d-flex flex-column align-items-center p-2">
                {
                    isOpen ? (
                        <CreateNoteForm />
                    ) : (
                        <NoteContainer />
                    )
                }
            </div>
        </>
    );
};
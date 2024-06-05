import NavBarButton from "./NavPanelComponents/NavBarButton";
import CreateNoteForm from "./CreateNoteForm";
import NoteContainer from "./NoteContainer";

import api from "../utils/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const [userInfo, setUserInfo] = useState(undefined);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const notes = [];

    useEffect(() => {
        if(!userInfo) {
            api.get("api/my_profile/").then(
                (response) => {
                    setUserInfo(response.data)
                }
            ).catch((error) => {
                alert(error.reponse.data);
                navigate("/")
            });
        }
    }, []);

    const onLogout = (event) => {
        event.preventDefault();
        localStorage.clear();
        navigate("/");
    };

    const onSetIsOpen = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid" >
                    <NavBarButton buttonValue={"Logout"} onClick={onLogout}/>
                    <NavBarButton buttonValue={isOpen ? "Back to my notes" : "Create note"} onClick={onSetIsOpen} />
                    <div className="p-1" style={{fontSize: "20px"}}>
                        {
                            userInfo && (
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="m-1">{userInfo.username}</div>
                                    <img src="/user.png" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </nav>
            <div className="container mt-5 d-flex flex-column align-items-center p-2">
                {
                    isOpen ? (
                        <CreateNoteForm />
                    ) : (
                        <NoteContainer />
                    )
                }
            </div>
        </div>
    );
};
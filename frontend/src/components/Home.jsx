import NavBarButton from "./NavPanelComponents/NavBarButton";

export default function Home(){
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid" >
                    <NavBarButton buttonValue={"Logout"} />
                    <NavBarButton buttonValue={"Create new note"} />
                    <div className="p-1" style={{fontSize: "24px"}}>
                        User: <string>Nazar</string>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default function NavBarContainer({ children }){
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid" >
                {children}
            </div>
        </nav>
    );
};
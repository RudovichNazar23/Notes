import { Link } from "react-router-dom";

export default function FormFooter({ linkPath, linkText, footerText }){
    return (
        <div className="m-1 p-1 d-flex flex-column">
            {footerText}
            <Link to={linkPath ? ( linkPath ) : "/"}>{linkText}</Link>
        </div>
    );
};
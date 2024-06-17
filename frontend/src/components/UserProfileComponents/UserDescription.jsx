import { useState } from "react";

export default function UserDescription({ description }){
    const [isOpen, setIsOpen] = useState(false);
    const DoubleClickHandler = () => setIsOpen(!isOpen);

    return (
        !isOpen ? (
            <div className="container mt-5 p-5 border rounded" onDoubleClick={DoubleClickHandler}>
                {description}
            </div>
        ) : (
            <div className="container mt-5 p-5">
                <textarea value={description} 
                      onDoubleClick={DoubleClickHandler} 
                      className="form-control"
                />
            </div>
        )
    );
};  
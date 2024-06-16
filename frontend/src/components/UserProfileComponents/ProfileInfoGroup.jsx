import { useState } from "react";

export default function ProfileInfoGroup({ fieldValue }){
    const [isOpen, setIsOpen] = useState(false);

    const DoubleClickHandler = () => setIsOpen(!isOpen);

    return (
        <div className="m-1 d-flex flex-row justify-content-between" style={{width: "65%"}}>
            {
                isOpen ? (
                    <>
                        <input type="text" value={fieldValue} className="form-control" onDoubleClick={DoubleClickHandler}/>
                        <button className="btn btn-primary m-1">Update</button>
                    </>
                ) : (
                    <div className="form-control" onDoubleClick={DoubleClickHandler}>{fieldValue}</div>
                )
            }
        </div>
    );
};
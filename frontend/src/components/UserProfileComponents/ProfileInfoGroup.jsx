import useUpdateHook from "../../custom_hooks/useUpdateHook";

import ErrorMessagesContainer from "./ErrorMessagesContainer";

export default function ProfileInfoGroup({ value, inputName, profileId }){
    const { isOpen, fieldValue, errorMessages, onDoubleClickHandler, onChangeHandler, onClickHandler } = useUpdateHook(value, profileId, inputName);

    return (
        <div className="m-1 d-flex flex-row justify-content-between" style={{width: "65%"}}>
            {
                isOpen ? (
                    <>
                        <div className="container d-flex flex-column">
                            <input type="text" value={fieldValue} 
                                            className="form-control" 
                                            onDoubleClick={onDoubleClickHandler}
                                            onChange={onChangeHandler}
                            />
                            { errorMessages.length > 0 && (<ErrorMessagesContainer messages={errorMessages} />) }
                        </div>
                        <div>
                            <button className="btn btn-primary m-1" onClick={onClickHandler}>Update</button>
                        </div>
                    </>
                ) : (
                    <div className="form-control" onDoubleClick={onDoubleClickHandler}>{fieldValue}</div>
                )
            }
        </div>
    );
};
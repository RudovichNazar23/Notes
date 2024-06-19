import useUpdateHook from "../../custom_hooks/useUpdateHook";

import ErrorMessagesContainer from "./ErrorMessagesContainer";

export default function UserDescription({ description, profileId, inputName }){
    const { isOpen, fieldValue, errorMessages ,onDoubleClickHandler, onChangeHandler, onClickHandler } = useUpdateHook(description, profileId, inputName);

    return (
        !isOpen ? (
            <div className="container mt-5 p-5 border rounded" onDoubleClick={onDoubleClickHandler}>
                {fieldValue}
            </div>
        ) : (
            <div className="container mt-5 p-5">
                <textarea value={fieldValue} 
                          onDoubleClick={onDoubleClickHandler} 
                          onChange={onChangeHandler}
                          className="form-control"
                />
                { errorMessages.length > 0 && <ErrorMessagesContainer messages={errorMessages} /> }
                <button className="btn btn-primary mt-1" 
                        style={{float: "right"}}
                        onClick={onClickHandler}
                >
                    Update
                </button>
            </div>
        )
    );
};  
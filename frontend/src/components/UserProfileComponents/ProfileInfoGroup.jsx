import { useEffect, useState } from "react";
import api from "../../utils/api";

export default function ProfileInfoGroup({ fieldValue, inputName, profileId }){

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(fieldValue);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => { setInputValue(fieldValue) }, [fieldValue])

    const DoubleClickHandler = () => setIsOpen(!isOpen);

    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const updateHandler = (event) => {
        event.preventDefault();
        const response = api.put(`api/update_user_profile/${profileId}/`, { [inputName]: inputValue });
        response
        .then((res) => {
            if(res.status === 200){
                setInputValue(res.data[inputName]);
                setIsOpen(false);
            }
        })
        .catch((error) => {
            setErrorMessages(error.response.data[inputName]);
        });
    };

    return (
        <div className="m-1 d-flex flex-row justify-content-between" style={{width: "65%"}}>
            {
                isOpen ? (
                    <>
                        <div className="container d-flex flex-column">
                            <input type="text" value={inputValue} 
                                            className="form-control" 
                                            onDoubleClick={DoubleClickHandler}
                                            onChange={onChangeHandler}
                            />
                            <div className="d-flex flex-column">
                                {
                                    errorMessages.length > 0 && (
                                        errorMessages.map(
                                            (error, errorId) => <div key={errorId} className="text-danger m-1 p-1">{error}</div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary m-1" onClick={updateHandler}>Update</button>
                        </div>
                    </>
                ) : (
                    <div className="form-control" onDoubleClick={DoubleClickHandler}>{inputValue}</div>
                )
            }
        </div>
    );
};
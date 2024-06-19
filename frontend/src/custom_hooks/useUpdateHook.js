import { useState, useEffect } from "react";

import api from "../utils/api";

export default function useUpdateHook(defaultValue, profileId, inputName){
    const [isOpen, setIsOpen] = useState(false);
    const [fieldValue, setFieldValue] = useState(defaultValue);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => { setFieldValue(defaultValue) }, [defaultValue]);

    const onDoubleClickHandler = () => setIsOpen(!isOpen);
    const onChangeHandler = (event) => setFieldValue(event.target.value);

    const onClickHandler = (event) => {
        event.preventDefault();
        const response = api.put(`api/update_user_profile/${profileId}/`, { [inputName]: fieldValue });
        response
        .then( (res) => {
            if(res.status === 200){
                setIsOpen(false);
                setFieldValue(res.data[inputName]);
            }
        } )
        .catch( (error) => setErrorMessages(error.response.data[inputName]) );
    };

    return { isOpen, fieldValue, errorMessages, setFieldValue, setIsOpen, onDoubleClickHandler, onChangeHandler, onClickHandler };
};
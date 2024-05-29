import FormHeader from "./FormComponents/FormHeader";
import FormGroup from "./FormComponents/FormGroup";
import FormFooter from "./FormComponents/FormFooter";
import FormContainer from "./FormComponents/FormContainer";
import FormButton from "./FormComponents/FormButton";

import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm(){
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        const username = event.currentTarget.elements.username.value;
        const password = event.currentTarget.elements.password.value;
        if(!username || !password) return;

        const response = api.post("api/create_user/", { username, password });
        response
        .then((res) => res.status === 201 && navigate("/"))
        .catch((error) => console.log(error.response.data));
        
    };

    return (
        <FormContainer>
            <FormHeader headerValue={"Register"} />
            <form className="p-3" onSubmit={onSubmit}>
                <FormGroup 
                        labelValue={"Username"}
                        inputType={"text"}
                        inputId={"username"}
                        inputPlaceHolder={"Type your username"}        
                />
                <FormGroup 
                        labelValue={"Password"}
                        inputType={"password"}
                        inputId={"password"}
                        inputPlaceHolder={"Type your password"}
                />
                <FormButton buttonText={"Register"} />
                <FormFooter linkPath={"/"} linkText={"Login"} footerText={"Do you have an account ?"} />
            </form>
        </FormContainer>
    );
};
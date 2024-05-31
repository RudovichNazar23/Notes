import FormHeader from "./FormComponents/FormHeader";
import FormGroup from "./FormComponents/FormGroup";
import FormFooter from "./FormComponents/FormFooter";
import FormContainer from "./FormComponents/FormContainer";
import FormButton from "./FormComponents/FormButton";

import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constans";


export default function LoginForm(){
    const navigate = useNavigate();
    const [errorDetail, setErrorDetail] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        const username = event.currentTarget.username.value;
        const password = event.currentTarget.password.value;
        
        if(!username || !password) return;

        api.post("/auth/token/", { username, password })
        .then((response) => {
            if(response.status === 200){
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate("/home")
            };
        })
        .catch((error) => {setErrorDetail(error.response.data.detail)});
    };


    return (
        <FormContainer>
            <FormHeader headerValue={"Login"} />
            <form className="p-3" onSubmit={onSubmit}>
                {
                    errorDetail && (
                        <div className="container d-flex flex-column align-items-center justify-content-center border border-danger rounded p-2">
                            <div className="text-danger">{errorDetail}</div>
                        </div>
                    )
                }
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
                <FormButton buttonText={"Login"} />
                <FormFooter linkPath={"/registration"} linkText={"Register"} footerText={"Don't you have an account ?"} />
            </form>
        </FormContainer>
    );
};
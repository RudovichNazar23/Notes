import FormHeader from "./FormComponents/FormHeader";
import FormGroup from "./FormComponents/FormGroup";
import FormFooter from "./FormComponents/FormFooter";
import FormContainer from "./FormComponents/FormContainer";
import FormButton from "./FormComponents/FormButton";

export default function RegistrationForm(){
    return (
        <FormContainer>
            <FormHeader headerValue={"Register"} />
            <form className="p-3">
                <FormGroup 
                        labelValue={"Username"}
                        inputType={"text"}
                        inputName={"username"}
                        inputPlaceHolder={"Type your username"}        
                />
                <FormGroup 
                        labelValue={"Password"}
                        inputType={"password"}
                        inputName={"password"}
                        inputPlaceHolder={"Type your password"}
                />
                <FormButton buttonText={"Register"} />
                <FormFooter linkPath={"/"} linkText={"Login"} footerText={"Do you have an account ?"} />
            </form>
        </FormContainer>
    );
};
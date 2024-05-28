import FormHeader from "./FormComponents/FormHeader";
import FormGroup from "./FormComponents/FormGroup";
import FormFooter from "./FormComponents/FormFooter";
import FormContainer from "./FormComponents/FormContainer";
import FormButton from "./FormComponents/FormButton";

export default function LoginForm(){

    return (
        <FormContainer>
            <FormHeader headerValue={"Login"} />
            <form className="p-3" >
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
                <FormButton buttonText={"Login"} />
                <FormFooter linkPath={"/registration"} linkText={"Register"} footerText={"Don't you have an account ?"} />
            </form>
        </FormContainer>
    );
};
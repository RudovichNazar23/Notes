import FormContainer from "./FormComponents/FormContainer";
import FormGroup from "./FormComponents/FormGroup";
import FormHeader from "./FormComponents/FormHeader";
import FormButton from "./FormComponents/FormButton";


export default function CreateNoteForm(){
    return (
        <FormContainer>
            <FormHeader headerValue={"Create new note"}/>
            <FormGroup labelValue={"Title"} 
                       inputType={"text"} 
                       inputPlaceHolder={"Type a title of a new note"} 
                       inputId={"note_title"} 

            />
            <FormGroup labelValue={"Content"}
                       inputType={"textarea"}
                       inputPlaceHolder={"Type note content"}
                       inputId={"note_content"}
            />
            <FormButton buttonText={"Create note"} />
        </FormContainer> 
    );
};
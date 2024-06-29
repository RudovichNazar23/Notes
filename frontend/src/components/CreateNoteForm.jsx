import FormContainer from "./FormComponents/FormContainer";
import FormGroup from "./FormComponents/FormGroup";
import FormHeader from "./FormComponents/FormHeader";
import FormButton from "./FormComponents/FormButton";

import api from "../utils/api";

export default function CreateNoteForm(){
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const currentTarget = event.currentTarget;
        const noteTitle = currentTarget.elements.note_title.value;
        const noteContent = currentTarget.elements.note_content.value;
        if(!noteTitle || !noteContent) return;

        const reponse = api.post("api/note/", { "note_title": noteTitle, "note_content": noteContent });
        reponse
        .then((res) => res.status === 201 && window.location.reload())
        .catch((error) => alert(error));
    };

    return (
        <FormContainer>
            <FormHeader headerValue={"Create new note"}/>
            <form className="p-3" onSubmit={onSubmitHandler}>
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
            </form>
        </FormContainer> 
    );
};
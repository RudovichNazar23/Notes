import NoteDate from "./NoteDate";
import api from "../utils/api";
import { useState } from "react";

export default function NoteCard({ note }){
    const { id,  note_title, note_content, note_date_created } = note;

    const [isOpen, setIsOpen] = useState(false);

    const [inputValue, setInputValue] = useState({
        "note_title": note_title,
        "note_content": note_content
    });

    const onChangeInputValue = (event) => {
        const inputValue = event.currentTarget.value;
        const inputId = event.currentTarget.id;

        setInputValue(
            (prev) => { return {...prev, [inputId]: inputValue} }
        );
    };

    const onDeleteNote = (event) => {
        event.preventDefault();
        const response = api.delete(`api/delete_note/${id}/`);
        response
        .then((res) => res.status === 204 && window.location.reload())
        .catch((error) => alert(error.response.data.detail));
    };

    return (
        <div className="card m-1 p-2" style={{width: "500px", height: "350px"}}>
            <div className="card-body">
                {
                    isOpen ? <input type="text" value={inputValue.note_title} id="note_title" className="form-control" onChange={onChangeInputValue} /> 
                    : <h5 className="card-title text-center">{note_title}</h5>
                }
                <hr />
                {
                    isOpen ? <textarea value={inputValue.note_content} id="note_content" className="form-control" onChange={onChangeInputValue} /> 
                    : <p className="card-text">{note_content}</p>
                }
                <hr />
                <NoteDate date={note_date_created} />
            </div>
            <div className="d-flex flex-row justify-content-between" style={{width: "170px"}}>
                <a className="btn btn-info m-1" onClick={() => setIsOpen(true)}>
                    Update
                </a>
                {!isOpen && <a className="btn btn-danger m-1" onClick={onDeleteNote}>Delete</a>}
                {isOpen && <a className="btn btn-primary m-1" onClick={() => setIsOpen(false)}>Cancel</a>}
            </div>
        </div>
    );
};
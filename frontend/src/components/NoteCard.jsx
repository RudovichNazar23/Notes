import NoteDate from "./NoteDate";
import api from "../utils/api";

export default function NoteCard({ note }){
    const { id,  note_title, note_content, note_date_created } = note;

    const onDeleteNote = (event) => {
        event.preventDefault();
        const response = api.delete(`api/delete_note/${id}/`);
        response
        .then((res) => res.status === 204 && window.location.reload())
        .catch((error) => alert(error.response.data.detail));
    };

    return (
        <div className="card m-1 p-2" style={{width: "500px", height: "250px"}}>
            <div className="card-body">
                <h5 className="card-title text-center">{note_title}</h5>
                <hr />
                <p className="card-text">{note_content}</p>
                <hr />
                <NoteDate date={note_date_created} />
            </div>
            <div className="d-flex flex-row justify-content-between" style={{width: "160px"}}>
                <a className="btn btn-info">Update</a>
                <a className="btn btn-danger" onClick={onDeleteNote}>Delete</a>
            </div>
        </div>
    );
};
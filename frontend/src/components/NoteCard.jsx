export default function NoteCard({ note }){
    const { note_title, note_content } = note;

    return (
        <div className="card m-1 p-2" style={{width: "500px", height: "250px"}}>
            <div className="card-body">
                <h5 className="card-title text-center">{note_title}</h5>
                <hr />
                <p className="card-text">{note_content}</p>
                <hr />
            </div>
            <div className="d-flex flex-row justify-content-between" style={{width: "160px"}}>
                <a className="btn btn-info">Update</a>
                <a className="btn btn-danger">Delete</a>
            </div>
        </div>
    );
};
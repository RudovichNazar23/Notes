import NoteCard from "./NoteCard";

import { useState, useEffect } from "react";

import api from "../utils/api";

export default function NoteContainer(){
    const [notes, setNotes] = useState([]);

    useEffect(
        () => {
            api.get("api/note/")
            .then((reponse) => setNotes(reponse.data))
            .catch((error) => alert(error))
        }, []
    );

    return (
        <>
            {
                notes.length > 0 ? (
                    notes.map(
                        (note, noteIndex) => <NoteCard key={noteIndex} note={note} />
                    )
                ) : (
                    <div className="container d-flex flex-row align-items-center justify-content-center">
                        <h4>There is not any notes here...</h4>
                    </div>
                )
            }
        </>
    );
};
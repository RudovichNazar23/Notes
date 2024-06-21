import { useState } from "react";
import api from "../../utils/api";

export default function ModalForm({ profileId }){
    const [uploadedPhoto, setUploadedPhoto] = useState(undefined);
   
    const onChange = (event) => {
        const uploadedPhoto = event.currentTarget.files[0];

        if(uploadedPhoto){
            setUploadedPhoto(uploadedPhoto);
        };
    };

    const onClickHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("user_profile_picture", uploadedPhoto);

        const response = api.put(`api/update_user_profile/${profileId}/`, formData);
        response
        .then( (res) => res.status === 200 && window.location.reload() )
        .catch( (error) => console.log(error) );
    };

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Upload new photo</h5>
                </div>
                <div className="modal-body">
                    <input type="file" className="form-control" onChange={onChange}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={onClickHandler}>Save changes</button>
                </div>
                </div>
            </div>
        </div>
    );
};
export default function FormGroup({ labelValue, inputType, inputPlaceHolder, inputId }){
    return (
        <div className="form-group m-1">
            <label>
                <strong>
                    {labelValue}
                </strong>
            </label>
            <input type={inputType} placeholder={inputPlaceHolder} id={inputId} className="form-control" />
        </div>
    );
};
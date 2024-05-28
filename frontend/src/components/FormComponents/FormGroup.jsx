export default function FormGroup({ labelValue, inputType, inputPlaceHolder, inputName }){
    return (
        <div className="form-group m-1">
            <label>
                <strong>
                    {labelValue}
                </strong>
            </label>
            <input type={inputType} placeholder={inputPlaceHolder} name={inputName} className="form-control" />
        </div>
    );
};
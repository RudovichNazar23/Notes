export default function FormGroup({ labelValue, inputType, inputPlaceHolder, inputId, fieldErrors }){
    return (
        <div className="form-group m-1">
            <label>
                <strong>
                    {labelValue}
                </strong>
            </label>
            <input type={inputType} placeholder={inputPlaceHolder} id={inputId} className="form-control" />
            {
                    fieldErrors && (
                        <div className="p-0">
                            {
                                fieldErrors.map((error, errorIndex) => <div key={errorIndex} className="text-danger m-2">{error}</div>)
                            }
                        </div>
                    )
                }
        </div>
    );
};
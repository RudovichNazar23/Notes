export default function FormGroup({ labelValue, inputType, inputPlaceHolder, inputId, inputValue ,fieldErrors }){
    return (
        <div className="form-group m-1">
            <label>
                <strong>
                    {labelValue}
                </strong>
            </label>
            {
                inputType === "textarea" ? <textarea placeholder={inputPlaceHolder} id={inputId} className="form-control" value={inputValue}/>
                :
                <input type={inputType} placeholder={inputPlaceHolder} id={inputId} className="form-control" value={inputValue} />
            }
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
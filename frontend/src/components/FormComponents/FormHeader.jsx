export default function FormHeader({ headerValue }){
    return (
        <div className="container p-3 d-flex flex-column align-items-between justify-content-center">
            <h3 className="text-center">
                {
                    headerValue ? ( headerValue ) : ("Form")
                }
            </h3>
            <hr />
        </div>
    );
};
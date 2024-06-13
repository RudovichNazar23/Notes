export default function FormContainer({ children }){
    const divStyle = {
        "width": "100%",
        "height": "800px",
        "fontSize": "20px"
    };

    return(
        <div className="d-flex flex-column align-items-center justify-content-center" 
             style={divStyle}
        >
            <div style={{"width": "50%"}} className="border border-dark rounded p-3">
                {
                    children.map(
                        (child) => child
                    )
                }
            </div>

        </div>
    );
};